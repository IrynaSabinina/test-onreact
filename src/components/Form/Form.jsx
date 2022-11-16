import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import styles from './Form.module.css';

export const FormEl = ({ myFunction }) => {
  const [value, setValue] = useState('');
  const [color, setColor] = useState('gray');
  const [raiting, setRaiting] = useState('');

  useEffect(() => {
    setValue(value);
    setColor(color);
    setRaiting(raiting);
  }, [value, color, raiting]);

  useEffect(() => {
    myFunction(value, raiting);
  });

  const handleInputChange = event => {
    event.preventDefault();
    const password = event.target.value;
    setValue(password);

    const lettersLow = 'qwertyuiopasdfghjklzxcvbnm';
    const lettersUp = 'QWERTYUIOPLKJHGFDSAZXCVBNM';
    const digits = '0123456789';
    const symbols = '!@#$%^&*()_-+=|/.,:;"[]{}';
    let isLeters = '';
    let isSymbols = '';
    let isDigits = '';
    for (let i = 0; i < password.length; i++) {
      if (lettersLow.includes(password[i]) || lettersUp.includes(password[i])) {
        isLeters = 'true';
      } else if (digits.includes(password[i])) {
        isDigits = 'true';
      } else if (symbols.includes(password[i])) {
        isSymbols = 'true';
      }
    }
    if (password.length === 0) {
      setColor('gray');
      setRaiting('');
    } else if (password.length < 8) {
      setColor('red');
      setRaiting('');
    } else if (isLeters && isSymbols && isDigits) {
      setColor('green');
      setRaiting('strong');
    } else if (
      (isLeters && isSymbols) ||
      (isSymbols && isDigits) ||
      (isLeters && isDigits)
    ) {
      setColor('yellow');
      setRaiting('medium');
    } else if (isDigits || isLeters || isSymbols) {
      setColor('red');
      setRaiting('easy');
    }
  };

  // const raitingButton = {
  //   background: color,
  //   width: '300px',
  //   height: '30px',
  // };

  return (
    <>
      <div className={styles.form}>
        <h1>Check your Password</h1>
        <input
          className={styles.inputIn}
          type="text"
          name="password"
          value={value}
          placeholder="minimum 8 characters"
          onChange={handleInputChange}
        />
        <div className={styles.raiting}>
          <div id="easy" className={styles.btn}>
            {raiting === 'easy' ? <span> to easy</span> : <></>}
          </div>
          <div id="medium" className={styles.btn}>
            {raiting === 'medium' ? <span> medium</span> : <></>}
          </div>
          <div id="strong" className={styles.btn}>
            {raiting === 'strong' ? <span> password is strong</span> : <></>}
          </div>
        </div>
      </div>
    </>
  );
};
