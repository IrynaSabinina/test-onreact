import styles from './FindElement.module.css';
import { useSelector, useDispatch } from 'react-redux';

import Form from 'react-bootstrap/Form';

import { filter } from 'redux/reducers';

export const FindElement = () => {
  const filterVal = useSelector(state => state.filter);
  const dispatch = useDispatch();
  // console.log(filter);

  const hendlFilter = e => {
    dispatch(filter(e.target.value));
  };

  return (
    <div className={styles.findForm}>
      <Form.Label className={styles.findForm}>
        <Form.Text className="text-muted">Find contacts by name</Form.Text>
        <Form.Control
          className={styles.inputFind}
          type="text"
          name="filter"
          value={filterVal}
          onChange={hendlFilter}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Form.Label>
    </div>
  );
};
