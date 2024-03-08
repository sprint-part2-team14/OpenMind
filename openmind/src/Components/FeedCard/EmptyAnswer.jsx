import Styles from '../../Styles/EmptyAnswer.module.css';

const EmptyAnswer = ({ profileImg, username }) => {
  return (
    <div className={Styles.container}>
      <img className={Styles.profile} src={profileImg} />
      <div className={Styles.answerArea}>
        <div className={Styles.username}>{username}</div>
        <div className={Styles.answerBox}>
          {/* 태욱이가 만든 Input 컴포넌트로 변경할 예정 */}
          <input className={Styles.answerInput} placeholder='답변을 입력해주세요' />
          {/* 지수언니가 만든 버튼 컴포넌트로 변경할 예정 */}
          <button className={Styles.answerButton} type='submit'>
            답변 완료
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmptyAnswer;
