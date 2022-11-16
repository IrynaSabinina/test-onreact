import { useEffect } from 'react';
// import { useState } from 'react';
import { FormEl } from '../../components/Form/Form';

import styles from '../../components/Form/Form.module.css';
export const PasswordCheck = () => {
  // const [firstValue, setFirstValue] = useState('gray');
  useEffect(() => {
    myFunction();
  }, []);

  const myFunction = (value, raiting) => {
    if (raiting !== 'easy' && raiting !== 'medium' && raiting !== 'strong') {
      document.getElementById('easy').className = styles.btn;
      document.getElementById('medium').className = styles.btn;
      document.getElementById('strong').className = styles.btn;
    }
    if (value?.length < 8) {
      document.getElementById('easy').className = styles.red;
      document.getElementById('medium').className = styles.red;
      document.getElementById('strong').className = styles.red;
    }
    if (raiting === 'easy') {
      document.getElementById('easy').className = styles.red;
      document.getElementById('medium').className = styles.btn;
      document.getElementById('strong').className = styles.btn;
    }
    if (raiting === 'medium') {
      document.getElementById('easy').className = styles.yellow;
      document.getElementById('medium').className = styles.yellow;
      document.getElementById('strong').className = styles.btn;
    } else if (raiting === 'strong') {
      document.getElementById('easy').className = styles.green;
      document.getElementById('medium').className = styles.green;
      document.getElementById('strong').className = styles.green;
    }
  };
  return (
    <>
      <FormEl myFunction={myFunction} />
    </>
  );
};
