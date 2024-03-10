import Styles from '../../Styles/InputTextArea.module.css';

const InputTextArea = ({ value, onChange }) => {
  return (
    <form>
      <textarea className={Styles.input} placeholder='질문을 입력해주세요' value={value} onChange={onChange}></textarea>
    </form>
  );
};

export default InputTextArea;
