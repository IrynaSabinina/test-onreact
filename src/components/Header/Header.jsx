import { useSelector } from 'react-redux';
import { tokenAuthSeletor } from 'redux/selectors';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Navigation } from 'components/Navigation/Navigation';
export const Header = () => {
  const isAuth = useSelector(tokenAuthSeletor);
  return isAuth ? <UserMenu /> : <Navigation />;
};
