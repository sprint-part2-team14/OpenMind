import Styles from "../Styles/SentAnswer.module.css"

const SentAnswer = ({ profileImg, username, createdAt, children }) => {
  return (
    <div className={Styles.container}>
      <img className={Styles.profile} src={profileImg} />
      <div className={Styles.answerArea}>
        <div className={Styles.infoGroup}>
          <div className={Styles.username}>{username}</div>
          <div className={Styles.createdAt}>{createdAt}</div>
        </div>
        <div className={Styles.answer}>{children}</div>
      </div>
    </div>
  );
};

export default SentAnswer;