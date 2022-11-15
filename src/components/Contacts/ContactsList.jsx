import { ContactItem } from './ContactItem';
import styles from './Contacts.module.css';
import ListGroup from 'react-bootstrap/ListGroup';
import { filterSelector, contactsSelector } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';

import { useEffect } from 'react';
import {
  deleteContactThunk,
  getContactsThunk,
} from '../../redux/thunks/contatsThunks/thunks';

// {
//   contacts, contactDelete=deleteAction
// }

export const ContactsList = () => {
  const contacts = useSelector(contactsSelector);
  const filter = useSelector(filterSelector);
  const dispatch = useDispatch();
  // console.log(contacts);
  // console.log(filter);

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const avaliableContacts = contacts.filter(({ name }) =>
    name.toUpperCase().includes(filter.toUpperCase())
  );

  const handleDelete = id => {
    dispatch(deleteContactThunk(id));
  };

  return (
    <div className={styles.contacts}>
      <h2 className={styles.title}>Contacts</h2>
      <ListGroup variant="flush" className={styles.list}>
        {avaliableContacts.map(({ id, name, number }) => {
          return (
            <ContactItem
              key={id}
              id={id}
              name={name}
              number={number}
              contactDelete={handleDelete}
            />
          );
        })}
      </ListGroup>
    </div>
  );
};
