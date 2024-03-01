import styles from "../Styles/SentAnswer.module.css"

const SentAnswer = ({ profileImg, username, createdAt, children }) => {
  return (
    <div className={styles.container}>
      <img className={styles.profile} src={profileImg} />
      <div className={styles.answerArea}>
        <div className={styles.infoGroup}>
          <div className={styles.username}>{username}</div>
          <div className={styles.createdAt}>{createdAt}</div>
        </div>
        <div className={styles.answer}>{children}</div>
      </div>
    </div>
  );
};

export default SentAnswer;