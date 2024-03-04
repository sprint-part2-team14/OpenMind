import ICON_MESSAGE from '../Assets/Icon/iconMessages.svg';
import Styles from '../Styles/UserCard.module.css';

const UserCardMobile = ({ apidata }) => {
  const demoData = {
    profileImage: 'https://i.pinimg.com/236x/14/db/0b/14db0b0d30d52f81fd9681a137663578.jpg',
    username: '아초는고양이',
    questionCount: '9',
  };

  return (
    <div className={Styles.userCard}>
      <div className={Styles.profileBox}>
        <img className={Styles.image} src={demoData.profileImage} alt='프로필 이미지' />
        <div className={Styles.profileContext}>{demoData.username}</div>
      </div>
      <div className={Styles.questionBox}>
        <div className={Styles.receiveQuestion}>
          <img className={Styles.icon} src={ICON_MESSAGE} alt='메시지 아이콘' />
          <p className={Styles.receiveFeed}>받은 질문</p>
        </div>
        <p className={Styles.receiveFeed}>{demoData.questionCount}개</p>
      </div>
    </div>
  );
};

export default UserCardMobile;
