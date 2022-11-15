import { HomePage } from 'pages/HomePage/HomePage';

import { Main } from './Main/Main';
import { Sidebar } from './Sidebar/Sidebar';
import { Header } from 'components/Header/Header';

export const Layout = () => {
  return (
    <>
      <Main>
        <Sidebar>
          <Header />
        </Sidebar>
        <HomePage />
      </Main>
    </>
  );
};
