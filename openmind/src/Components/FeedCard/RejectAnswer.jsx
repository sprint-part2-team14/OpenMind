import Styles from '../Styles/RejectAnswer.module.css';

const RejectAnswer = ({ profileImg, username, createdAt }) => {
  return (
    <div className={Styles.container}>
      <img className={Styles.profile} src={profileImg} />
      <div className={Styles.answerArea}>
        <div className={Styles.infoGroup}>
          <div className={Styles.username}>{username}</div>
          <div className={Styles.createdAt}>{createdAt}</div>
        </div>
        <div className={Styles.answer}>답변 거절</div>
      </div>
    </div>
  );
};

export default RejectAnswer;
