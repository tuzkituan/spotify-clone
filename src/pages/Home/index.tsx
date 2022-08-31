import { Container } from '@chakra-ui/react';
import MainLayout from 'layouts/MainLayout';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Head>
        <title>Spotify</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container
        borderRadius={5}
        minW={{
          sm: '80vw',
          md: '80vw',
          lg: '70vw',
          xl: '55vw',
        }}
        padding={4}
      >
        SPOTIFY
      </Container>
    </MainLayout>
  );
};

export default Home;
