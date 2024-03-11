import ICON_MESSAGE from '../Assets/Icon/iconMessages.svg';
import Styles from '../Styles/UserCard.module.css';

const UserCard = ({ name, imageSource, questionCount, onClick }) => {
  return (
    <div className={Styles.userCard} onClick={onClick}>
      <div className={Styles.profileBox}>
        <img className={Styles.image} src={imageSource} alt='프로필 이미지' />
        <div className={Styles.profileContext}>{name}</div>
      </div>
      <div className={Styles.questionBox}>
        <div className={Styles.receiveQuestion}>
          <img className={Styles.icon} src={ICON_MESSAGE} alt='메시지 아이콘' />
          <p className={Styles.receiveFeed}>받은 질문</p>
        </div>
        <p className={Styles.receiveFeed}>{questionCount}개</p>
      </div>
    </div>
  );
};

export default UserCard;
