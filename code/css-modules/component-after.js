// MyComponent.js
import React from 'react';
import style from './MyComponent.css';

const MyComponent = () => (
  <div className={style.wrapper}>
    <p className={style.paragraph}>
      <span className={style.span}>
        Hella contrived.
      </span>
    </p>
  </div>
);

export default MyComponent;
