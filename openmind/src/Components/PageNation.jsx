import Styles from '../Styles/PageNation.module.css';

const PageNation = ({ state = 'active' }) => {
  const handleOnClick = e => {
    //(!state)를 활용한 토글 형식 구현
  };

  return (
    <button
      type='button'
      className={`${Styles[state]}`}
      disabled={state === 'active' ? true : false}
      onClick={handleOnClick}>
      1
    </button>
  );
};

export default PageNation;
