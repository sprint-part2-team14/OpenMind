import Styles from '../Styles/Badge.module.css';

const BadgeGray = () => {
  return (
    <>
      <div className={`${Styles.border} ${Styles.borderGray}`}>
        <p className={`${Styles.context} ${Styles.colorGray}`}>미답변</p>
      </div>
    </>
  );
};

export default BadgeGray;
