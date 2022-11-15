import { useSelector } from 'react-redux';

import { tokenAuthSeletor } from 'redux/selectors';

import Badge from 'react-bootstrap/Badge';

import { Navigation } from 'components/Navigation/Navigation';

export const HomePage = () => {
  const isAuth = useSelector(tokenAuthSeletor);
  return !isAuth ? (
    <>
      <h1>
        <Badge bg="secondary">
          {' '}
          Hello! Welcome to super pupper aplication My Phonbook! Please create
          you accout or Login!
        </Badge>
      </h1>
    </>
  ) : (
    <Navigation />
  );
};
