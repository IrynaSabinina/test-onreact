import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';

import { ToastContainer } from 'react-toastify';
import { PasswordCheck } from '../pages/PasswordCheck/ChagePassword';

export const App = () => {
  useEffect(() => {});
  return (
    <>
      <Routes>
        <Route path="/" element={<PasswordCheck />} />
      </Routes>
      <ToastContainer />
    </>
  );
};
