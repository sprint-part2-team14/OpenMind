import Styles from '../Styles/InputTextArea.module.css';

const InputTextArea = () => {
  return <input className={Styles.input} type='text' placeholder='이름을 입력하세요' />;
};

export default InputTextArea;
