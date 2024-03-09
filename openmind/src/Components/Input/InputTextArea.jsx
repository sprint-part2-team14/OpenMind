import Styles from '../../Styles/InputTextArea.module.css';

const InputTextArea = () => {
  return (
    <form>
      <textarea className={Styles.input} placeholder='이름을 입력하세요'></textarea>
    </form>
  );
};

export default InputTextArea;
