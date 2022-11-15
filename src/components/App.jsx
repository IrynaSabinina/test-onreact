import { HomePage } from '../pages/HomePage/HomePage';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Layout } from 'Layout/Layout';
import { MyContacts } from '../pages/MyContacts/MyContacts';
import { FormAuth } from '../components/SectionAutorization/FormAuth';
import { LoginPage } from '../pages/PageLogin/LoginPage';
import { ToastContainer } from 'react-toastify';

import { useDispatch } from 'react-redux';
import { currentUserThunk } from 'redux/login/loginThunks';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { PublicRoute } from './PrivateRoute/PublicRoute';
export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentUserThunk());
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
        </Route>
        <Route
          path="/register"
          element={
            <PublicRoute>
              <FormAuth />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute>
              <MyContacts />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <ToastContainer />
    </>
  );
};

// const [contacts, setContacts] = useState(() => {
//   return localStorage.getItem('contacts')
//     ? JSON.parse(localStorage.getItem('contacts'))
//     : [
//         { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//         { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//         { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//         { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//       ];
// });

// const [filter, setFilter] = useState('');

// useEffect(() => {
//   localStorage.setItem('contacts', JSON.stringify(contacts));
// }, [contacts]);

// const onSubmitHandlerAddContacts = data => {
//   contacts.find(contact => contact.name === data.name)
//     ? alert('This contacts allrady in')
//     : setContacts(prevState => [...prevState, data]);
// };

// const hendleChangeFindElement = ({ target: { value } }) => {
//   setFilter(value);
// };

// const addAvaliableList = () => {
//   return contacts.filter(({ name }) =>
//     name.toUpperCase().includes(filter.toUpperCase())
//   );
// };

// const contactDelete = key => {
//   setContacts(contacts.filter(contact => contact.id !== key));
// };
