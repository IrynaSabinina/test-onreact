import styles from '../Form/Form.module.css';
import { GoHome } from 'components/Navigation/GoHome';
import { useState } from 'react';
import { createNewUserThunk } from 'redux/login/loginThunks';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { Header } from 'components/Header/Header';

export const FormAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });
  const dispatch = useDispatch();

  const handleInputChange = event => {
    const { value, name } = event.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const handlSubmitNewUser = event => {
    event.preventDefault();
    setIsLoading(true);
    dispatch(createNewUserThunk(values))
      .unwrap()
      .then(() => {
        toast.success('Tnack you for registration');
      })
      .catch(error => {
        toast.error('Sorry, try again');
      })
      .finally(() => {
        setIsLoading(false);
      });
    setValues({ name: '', email: '', password: '' });
  };

  return (
    <>
      <Header />
      <Form className={styles.form} onSubmit={handlSubmitNewUser}>
        <Form.Group className="mb-3" controlId="formBasic">
          <Form.Label>
            <Form.Text className="text-muted">Login</Form.Text>

            <Form.Control
              type="text"
              name="name"
              value={values.name}
              onChange={handleInputChange}
              placeholder="enter your user name"
            />
          </Form.Label>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>
            <Form.Text className="text-muted">Email</Form.Text>

            <Form.Control
              type="email"
              name="email"
              value={values.email}
              onChange={handleInputChange}
              placeholder="enter your email"
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
              placeholder="Password minimum 7 points"
            />
          </Form.Label>
          <Button variant="success" disabled={isLoading} type="submit">
            {isLoading ? 'waiting piease' : 'Sing in'}
          </Button>
        </Form.Group>
      </Form>
      <GoHome />
    </>
  );
};
