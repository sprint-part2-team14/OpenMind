import React, { useRef } from 'react';

import ICON_PERSON from '../Assets/Icon/iconPerson.svg';
import Styles from '../Styles/InputField.module.css';

const InputField = ({ value, onChange }) => {
  const containerRef = useRef(null);

  const handleFocus = () => {
    containerRef.current.style.borderColor = 'var(--brown40)';
  };

  const handleBlur = () => {
    containerRef.current.style.borderColor = 'var(--gray40)';
  };

  return (
    <form ref={containerRef} className={Styles.container} onFocus={handleFocus} onBlur={handleBlur}>
      <img className={Styles.icon} src={ICON_PERSON} alt="입력" />
      <input
        className={Styles.input}
        type="text"
        placeholder="이름을 입력하세요"
        value={value}
        onChange={onChange}></input>
    </form>
  );
};

export default InputField;

//Auto Complete 제거
