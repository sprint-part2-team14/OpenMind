import { ReactComponent as ArrowToPage } from '../Assets/Icon/iconArrowToPage.svg';
import Styles from '../Styles/BoxButton.module.css';

const BoxButton = ({
  theme = 'fill',
  state = 'default',
  size = 'medium',
  text = '질문 받기',
  onClick,
}) => {
  return (
    <button
      type='button'
      className={`${Styles.boxButton} ${Styles[theme]} ${Styles[size]}`}
      disabled={state === 'inactive' ? true : false}
      onClick={onClick}
    >
      {text}
      <ArrowToPage className={`${Styles.arrowToPageIcon} ${Styles[theme]}`} />
    </button>
  );
};

export default BoxButton;
