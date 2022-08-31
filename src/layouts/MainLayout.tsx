import type { NextPage } from 'next';

interface HomeProps {
  children: React.ReactNode;
}
const MainLayout: NextPage<HomeProps> = ({ children }) => {
  return (
    <div className="main-layout">
      <div className="container">{children}</div>
    </div>
  );
};

export default MainLayout;
