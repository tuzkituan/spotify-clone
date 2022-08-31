import axios from 'axios';
import { store } from 'store';

import BASE_API from './api';

const create = () => {
  const token = window.localStorage.getItem('token');
  try {
    return axios.create({
      baseURL: BASE_API,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.log('🚀  ~ error', error);
    return axios.create({
      baseURL: BASE_API,
    });
  }
};

const checkError = (error: any) => {
  if (error?.response?.data) {
    console.log('🚀  ~ error?.response?.data', error?.response?.data);
    // toast(error.response.data.message)
  }
};

const callAPI = {
  get: async (route: string) => {
    try {
      const client = create();
      const { data } = await client.get(route);
      return data;
    } catch (error: any) {
      checkError(error);
    }
  },
  post: async (route: string, body: {}) => {
    try {
      const client = create();
      const { data } = await client.post(route, body);
      return data;
    } catch (error: any) {
      checkError(error);
    }
  },
  put: async (route: string, body: {}) => {
    try {
      const client = create();
      const { data } = await client.put(route, body);
      return data;
    } catch (error: any) {
      checkError(error);
    }
  },
  patch: async (route: string, body: {}) => {
    try {
      const client = create();
      const { data } = await client.patch(route, body);
      return data;
    } catch (error: any) {
      checkError(error);
    }
  },
  delete: async (route: string) => {
    try {
      const client = create();
      const { data } = await client.delete(route);
      return data;
    } catch (error: any) {
      checkError(error);
    }
  },
};

export default callAPI;
