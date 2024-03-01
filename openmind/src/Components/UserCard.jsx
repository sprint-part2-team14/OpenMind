import ICON_MESSAGE from '../Assets/Icon/iconMessages.svg';
import PROFILE_IMAGE from '../Assets/Images/imageUserProfile.svg';
import Styles from '../Styles/UserCard.module.css';

const UserCardMobile = () => {
  return (
    <div className={Styles.userCard}>
      <div className={Styles.profileBox}>
        <img className={Styles.image} src={PROFILE_IMAGE} alt='프로필 이미지' />
        <div className={Styles.profileContext}>아초는고양이</div>
      </div>
      <div className={Styles.questionBox}>
        <div className={Styles.receiveQuestion}>
          <img className={Styles.icon} src={ICON_MESSAGE} alt='메시지 아이콘' />
          <p className={Styles.receiveFeed}>받은 질문</p>
        </div>
        <p className={Styles.receiveFeed}>9개</p>
      </div>
    </div>
  );
};

export default UserCardMobile;
