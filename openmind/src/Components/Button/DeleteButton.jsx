import Styles from '../../Styles/DeleteButton.module.css';

const DeleteButton = ({ onClick, children, setCount, ...rest }) => {
  return (
    <button className={Styles.deleteButton} onClick={() => onClick(setCount)} {...rest}>
      {children}
    </button>
  );
};

export default DeleteButton;
