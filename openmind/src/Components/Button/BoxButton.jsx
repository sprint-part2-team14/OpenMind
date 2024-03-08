import { ReactComponent as ArrowToPage } from '../../Assets/Icon/iconArrowToPage.svg';
import Styles from '../../Styles/BoxButton.module.css';

// 화살표 있는 버튼만 프롭으로 arrow 넘겨줄 것
const BoxButton = ({ theme = 'fill', children, disabled, arrow, ...rest }) => {
  return (
    <button className={`${Styles.boxButton} ${Styles[theme]}`} disabled={disabled} {...rest}>
      {children}
      {arrow && <ArrowToPage className={`${Styles.arrowToPageIcon} ${Styles[theme]}`} />}
    </button>
  );
};

export default BoxButton;
