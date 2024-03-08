import Styles from '../Styles/PostnAnswerLayout.module.css';

import LOGO from '../Assets/Images/imageLogo.svg';
import HEADER_IMG from '../Assets/Images/imageMainPage.svg';
import MESSAGE_ICON from '../Assets/Icon/iconMessages.svg';

import ShareButton from '../Components/ShareButton';

const PostnAnswerLayout = ({ name, imageSource, questionCount, children }) => {
  return (
    <>
      <div className={Styles.header}>
        <img src={HEADER_IMG} className={Styles.headerImage} />
        <a href='/' className={Styles.logo}><img src={LOGO} className={Styles.logoImg} alt='로고 이미지'/></a>
      </div>
      <div className={Styles.main}>
        <div className={Styles.profileArea}>
          <div className={Styles.profileGroup}>
            <img src={imageSource} className={Styles.profileImage} />
            <div className={Styles.username}>{name}</div>
            <ShareButton />
          </div>
        </div>
        <div className={Styles.feedContainer}>
          <div className={Styles.questionInfo}>
            <img src={MESSAGE_ICON} className={Styles.messageIcon} />
            {questionCount ? (
            <div className={Styles.infoText}>{questionCount}개의 질문이 있습니다.</div>
            ) : (<div className={Styles.infoText}>아직 질문이 없습니다.</div>
            )}
          </div>
          <div className={Styles.questionArea}>
            {children}
            {/*<FeedCard />
            <FeedCard />
            <FeedCard />*/}
            {children}
            {/*children 승현언니는 FeedCard로 지인은 AnswerFeedCard로*/}
          </div>
        </div>
      </div>
    </>
  );
};

export default PostnAnswerLayout;
