import Styles from '../Styles/FloatingButton.module.css';

const FloatingButton = ({ children, ...rest }) => {
  return (
    <button className={Styles.floatingButton} {...rest}>
      {children}
    </button>
  );
};

export default FloatingButton;
