import ICON_PERSON from '../Assets/Icon/iconPerson.svg';
import Styles from '../Styles/InputField.module.css';

const InputField = () => {
  return (
    <div className={Styles.container}>
      <img className={Styles.icon} src={ICON_PERSON} alt='입력' />
      <input className={Styles.input} type='text' placeholder='이름을 입력하세요'></input>
    </div>
  );
};

export default InputField;
