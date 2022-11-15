import { useDispatch, useSelector } from 'react-redux';
import { userAuthSelector } from 'redux/selectors';
import { logoutThunk } from 'redux/login/loginThunks';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export const UserMenu = () => {
  const email = useSelector(userAuthSelector);
  const dispatch = useDispatch();
  const handleLogout = event => {
    event.preventDefault();
    dispatch(logoutThunk());
  };
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">Welcome {email} !</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Button variant="danger" onClick={handleLogout}>
              Log out
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
