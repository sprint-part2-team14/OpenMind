import { ReactComponent as ArrowToPage } from '../Assets/Icon/iconArrowToPage.svg';
import Styles from '../Styles/BoxButton.module.css';

// 화살표 있는 버튼만 프롭으로 arrow 넘겨줄 것
const BoxButton = ({ theme = 'fill', text = '질문 받기', disabled, onClick, arrow }) => {
  return (
    <button type='button' className={`${Styles.boxButton} ${Styles[theme]}`} disabled={disabled} onClick={onClick}>
      {text}
      {arrow && <ArrowToPage className={`${Styles.arrowToPageIcon} ${Styles[theme]}`} />}
    </button>
  );
};

export default BoxButton;
