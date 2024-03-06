import Styles from '../Styles/FloatingButton.module.css';

const FloatingButton = ({ onClick, text = '질문 작성' }) => {
  return (
    <button type='button' className={Styles.floatingButton} onClick={onClick}>
      {text}
    </button>
  );
};

export default FloatingButton;
