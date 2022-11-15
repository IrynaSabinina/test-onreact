import { Route, Routes } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import { PasswordCheck } from '../pages/PasswordCheck/PasswordCheck';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<PasswordCheck />} />
      </Routes>
      <ToastContainer />
    </>
  );
};
