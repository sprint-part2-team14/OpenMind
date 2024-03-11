import Styles from '../../Styles/DeleteButton.module.css';

const DeleteButton = ({ onClick, children, ...rest }) => {
  return (
    <button className={Styles.deleteButton} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

export default DeleteButton;
