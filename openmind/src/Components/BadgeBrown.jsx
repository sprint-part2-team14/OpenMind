import Styles from '../Styles/Badge.module.css';

const BadgeBrown = () => {
  return (
    <>
      <div className={`${Styles.border} ${Styles.borderBrown}`}>
        <p className={`${Styles.context} ${Styles.colorBrown}`}>답변 완료</p>
      </div>
    </>
  );
};

export default BadgeBrown;
