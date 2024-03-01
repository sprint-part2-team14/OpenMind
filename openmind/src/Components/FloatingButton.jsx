import Styles from '../Styles/FloatingButton.module.css';

const FloatingButton = () => {
  const handleOnClick = () => {
    // 변경 요망
    console.log(1);
  };
  return (
    <button
      type='button'
      className={Styles.floatingButton}
      onClick={handleOnClick}
    >
      질문 작성하기
    </button>
  );
};

export default FloatingButton;
