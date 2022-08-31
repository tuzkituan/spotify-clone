import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { fetchMe, getToken, updateToken } from 'store/actions/userSlice';
import { useAppDispatch } from 'store/hooks';
import {
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI,
  TOKEN_ENDPOINT,
} from 'utils/spotifyLogin';
import Login from '../../../pages/login';

const Auth = ({ children }: { children: any }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [code, setCode] = useState('');
  const token = useSelector(getToken);

  const getMe = () => {
    dispatch(fetchMe());
  };

  useEffect(() => {
    const localToken = window.localStorage.getItem('token');

    if (localToken !== 'null') {
      dispatch(updateToken(localToken));
    }
  }, []);

  useEffect(() => {
    if (router.asPath.startsWith('/?code=')) {
      setCode(router.asPath.replace('/?code=', ''));
    }
  }, []);

  useEffect(() => {
    if (token) {
      window.localStorage.setItem('token', token);
      getMe();
    }
  }, [token]);

  useEffect(() => {
    if (code) {
      axios({
        method: 'post',
        url: TOKEN_ENDPOINT,
        data: `grant_type=authorization_code&redirect_uri=${REDIRECT_URI}&client_id=${CLIENT_ID}&code=${code}`,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization:
            'Basic ' +
            new Buffer(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64'),
        },
      }).then((response) => {
        window.localStorage.setItem('token', response.data.access_token);
        dispatch(updateToken(response.data.access_token));
        router.push('/');
      });
    }
  }, [code]);

  if (!token) {
    return <Login />;
  } else {
    return children;
  }
};

export default Auth;
