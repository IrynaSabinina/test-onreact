import { FormEl } from '../../components/Form/Form';
import { FindElement } from '../../components/FindElement/FindElement';
import { ContactsList } from '../../components/Contacts/ContactsList';
import { GoHome } from '../../components/Navigation/GoHome';
import { useSelector } from 'react-redux';
import { STATUS } from '../../constanse/status';
import { authStatusSelector } from 'redux/selectors';
import { Header } from 'components/Header/Header';

export const MyContacts = () => {
  const status = useSelector(authStatusSelector);

  return (
    <>
      <Header />
      <FormEl />
      <FindElement />
      {status === STATUS.Success && <ContactsList />}

      <GoHome />
    </>
  );
};
// console.log('vgvgvg');
