import { Grid, GridItem } from '@chakra-ui/react';
import Header from 'components/Header';
import Player from 'components/Player';
import Sidebar from 'components/Sidebar';
import type { NextPage } from 'next';
import Head from 'next/head';

interface HomeProps {
  children: React.ReactNode;
}
const MainLayout: NextPage<HomeProps> = ({ children }) => {
  return (
    <div className="main-layout">
      <Head>
        <title>Spotify Clone</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Grid
        h="100vh"
        templateRows="repeat(12, 1fr)"
        templateColumns="repeat(12, 1fr)"
        gap={0}
      >
        <GridItem rowSpan={11} colSpan={2} bg="black">
          <Sidebar />
        </GridItem>
        <GridItem rowSpan={1} colSpan={10} bg="#201640">
          <Header />
        </GridItem>
        <GridItem rowSpan={10} colSpan={10} bg="#121212">
          {children}
        </GridItem>
        <GridItem rowSpan={1} colSpan={12} bg="#181818">
          <Player />
        </GridItem>
      </Grid>
    </div>
  );
};

export default MainLayout;
