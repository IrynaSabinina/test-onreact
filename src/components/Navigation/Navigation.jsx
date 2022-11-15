import { PublicNavigation } from './PublicNavigation';
import { PrivateNavigation } from './PrivateNavigation';
import { tokenAuthSeletor } from 'redux/selectors';
import { useSelector } from 'react-redux';
export const Navigation = () => {
  const isAuth = useSelector(tokenAuthSeletor);

  return isAuth ? <PrivateNavigation /> : <PublicNavigation />;
};
