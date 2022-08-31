import { Button, Center, Container, Flex } from '@chakra-ui/react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { SPOTIFY_LOGIN } from 'utils/spotifyLogin';

const Login: NextPage = () => {
  const router = useRouter();
  return (
    <Flex h="100vh" alignItems="center" w="100%" justifyContent="center">
      <Center>
        <Button onClick={() => router.push(SPOTIFY_LOGIN)}>
          LOGIN TO SPOTIFY
        </Button>
      </Center>
    </Flex>
  );
};

export default Login;
