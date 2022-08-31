import ListContainer from 'components/ListContainer';
import MainLayout from 'layouts/MainLayout';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <ListContainer />
    </MainLayout>
  );
};

export default Home;
