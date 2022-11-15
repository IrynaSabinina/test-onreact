import PropTypes from 'prop-types';
import styles from './Contacts.module.css';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

export const ContactItem = ({ id, name, number, contactDelete }) => {
  return (
    <ListGroup.Item className={styles.item}>
      {name} : {number}
      <Button
        variant="danger"
        className={styles.btnDel}
        type="button"
        onClick={() => contactDelete(id)}
      >
        Delete
      </Button>
    </ListGroup.Item>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  contactDelete: PropTypes.func.isRequired,
};
