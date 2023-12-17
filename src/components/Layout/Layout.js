import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { arrayOf, shape, string, number } from 'prop-types';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Body, Container } from './Layout.styled';

const Layout = ({ tabs }) => {
  return (
    <Body>
      <Header tabs={tabs} />
      <Container>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Container>
      <Footer />
    </Body>
  );
};

Layout.propTypes = {
  tabs: arrayOf(
    shape({
      id: string,
      title: string,
      order: number,
      path: string,
    })
  ),
};

Layout.defaultProps = {
  tabs: [],
};

export default Layout;
