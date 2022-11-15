import styles from './LoginPage.module.css';
import { GoHome } from '../../components/Navigation/GoHome';
import { useState } from 'react';
import { loginThunk } from 'redux/login/loginThunks';
import { useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { toast } from 'react-toastify';
import { Header } from 'components/Header/Header';

export const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = event => {
    const { value, name } = event.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const handlLogin = event => {
    event.preventDefault();
    console.log(values);
    dispatch(loginThunk(values))
      .unwrap()
      .then(data => {
        if (data.token) {
          navigate('/contacts');
        }
      })
      .catch(error => toast.error('Sorry try again'));
  };

  return (
    <>
      <Header />
      <Form className={styles.LoginForm} onSubmit={handlLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>
            <Form.Text className="text-muted">Email</Form.Text>
            <Form.Control
              type="email"
              name="email"
              value={values.email}
              onChange={handleInputChange}
            />
          </Form.Label>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>
            <Form.Text className="text-muted">Pasword</Form.Text>
            <Form.Control
              type="password"
              name="password"
              value={values.password}
              onChange={handleInputChange}
            />
            <Button variant="success" type="submit">
              Log in
            </Button>
          </Form.Label>
        </Form.Group>
      </Form>
      <GoHome />
    </>
  );
};
