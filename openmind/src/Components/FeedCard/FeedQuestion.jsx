import Styles from '../../Styles/FeedQuestion.module.css';

const FeedQuestion = ({ type, createdAt, children }) => {
  return (
    <div className={Styles.questionArea}>
      <div className={Styles.infoGroup}>
        {type} · {createdAt}
      </div>
      <div className={Styles.question}>{children}</div>
    </div>
  );
};

export default FeedQuestion;
