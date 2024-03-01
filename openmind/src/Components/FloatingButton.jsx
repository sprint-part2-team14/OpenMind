import Styles from '../Styles/FloatingButton.module.css';

const FloatingButton = ({ onClick }) => {
  return (
    <button type='button' className={Styles.floatingButton} onClick={onClick}>
      질문 작성하기
    </button>
  );
};

export default FloatingButton;
