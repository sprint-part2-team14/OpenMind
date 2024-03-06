import { ReactComponent as ArrowToPage } from '../Assets/Icon/iconArrowToPage.svg';
import Styles from '../Styles/BoxButton.module.css';

const BoxButton = ({ theme = 'fill', text = '질문 받기', size, disabled, onClick, arrow }) => {
  return (
    <button
      type='button'
      className={`${Styles.boxButton} ${Styles[theme]} ${Styles[size]}`}
      size={size}
      disabled={disabled}
      onClick={onClick}>
      {text}
      {arrow && <ArrowToPage className={`${Styles.arrowToPageIcon} ${Styles[theme]}`} />}
    </button>
  );
};

export default BoxButton;
