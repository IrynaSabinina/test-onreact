import { Link, List } from './Navigation.styled';

import Navbar from 'react-bootstrap/Navbar';

export const PublicNavigation = () => {
  // const location = useLocation();

  return (
    <Navbar expand="lg" variant="light" bg="light">
      <List>
        <li>
          <Link to="/register">Sing in</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </List>
    </Navbar>
  );
};
