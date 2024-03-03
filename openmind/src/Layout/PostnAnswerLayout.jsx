import Styles from '../Styles/PostnAnswerLayout.module.css';

//import LOGO from '../Assets/Icon/logo.svg';
import HEADER_IMG from '../Assets/Images/imageMainPage.svg';
import PROFILE_IMG from '../Assets/Images/imageUserProfile.svg'; //추후 API 연동해서 받아오기
import MESSAGE_ICON from '../Assets/Icon/iconMessages.svg';

import ShareButton from '../Components/ShareButton';
import FeedCard from '../Components/FeedCard';

const PostnAnswerLayout = (/*{ children }*/) => {
  return (
    <>
      <div className={Styles.header}>
        {/*여기에 로고파일 추가해서 import하면 됩니당*/}
        {/*<img src={LOGO} className={Styles.logo} />*/}
        <img src={HEADER_IMG} className={Styles.headerImage} />
      </div>
      <div className={Styles.main}>
        <div className={Styles.profileArea}>
          <div className={Styles.profileGroup}>
            {/*프로필 이미지와 유저 이름은 API로 받아올 예정*/}
            <img src={PROFILE_IMG} className={Styles.profileImage} />
            <div className={Styles.username}>아초는고양이</div>
            <ShareButton />
          </div>
        </div>
        <div className={Styles.feedContainer}>
          <div className={Styles.questionInfo}>
            <img src={MESSAGE_ICON} className={Styles.messageIcon} />
            {/*질문 갯수도 API로 받아올 예정*/}
            <div className={Styles.infoText}>3개의 질문이 있습니다.</div>
          </div>
          {/*피드 내용인 질문들과 답변들도 API로 받아올 예정
          이후 질문 피드 페이지에서 레이아웃의 children props로 뿌릴 예정*/}
          <div className={Styles.questionArea}>
            {/* {children} */}
            <FeedCard />
            <FeedCard />
            <FeedCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default PostnAnswerLayout;
