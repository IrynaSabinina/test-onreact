import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { tokenAuthSeletor } from 'redux/selectors';

export const PrivateRoute = ({ children }) => {
  const token = useSelector(tokenAuthSeletor);

  return token ? children : <Navigate to="/" />;
};
