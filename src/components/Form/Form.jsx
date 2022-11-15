import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import styles from './Form.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { addContactThunk } from '../../redux/thunks/contatsThunks/thunks';
import { contactsSelector } from '../../redux/selectors';

export const FormEl = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(contactsSelector);

  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    const inContacts = contacts.find(
      item => item.name.toUpperCase() === name.toUpperCase()
    );

    if (inContacts) {
      alert('is already in your phonebook');
      return;
    } else {
      dispatch(addContactThunk({ name, number }));
      resetInput();
    }
  };

  const resetInput = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <Form className={styles.form} onSubmit={handleSubmit}>
        <Form.Label className={styles.inputIn}>
          <Form.Text className="text-muted">Name</Form.Text>
          <Form.Control
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Form.Label>
        <Form.Label className={styles.inputIn}>
          <Form.Text className="text-muted">Number</Form.Text>
          <Form.Control
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Form.Label>
        <Button variant="success" type="submit">
          Add contacts
        </Button>
      </Form>
    </>
  );
};
