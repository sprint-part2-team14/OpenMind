import Styles from '../Styles/PostnAnswerLayout.module.css';

import LOGO from '../Assets/Images/imageLogo.svg';
import HEADER_IMG from '../Assets/Images/imageMainPage.svg';
import MESSAGE_ICON from '../Assets/Icon/iconMessages.svg';

import ShareButton from '../Components/ShareButton';
import AnswerDeleteButton from '../Components/AnswerPage/AnswerDeleteButton';
// import BoxButton from '../Components/BoxButton';

const AnswerLayout = ({ name, imageSource, questionCount, setCount, children }) => {
  return (
    <>
      <div className={Styles.header}>
        <a src='/' className={Styles.logo}><img src={LOGO} className={Styles.logoImage} alt='로고이미지' /></a>
        <img src={HEADER_IMG} className={Styles.headerImage} />
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
          <button onClick={() => AnswerDeleteButton(setCount)}>삭제하기</button>
          <div className={Styles.questionInfo}>
            <img src={MESSAGE_ICON} className={Styles.messageIcon} />
            <div className={Styles.infoText}>{questionCount}개의 질문이 있습니다.</div>
          </div>
          {/*피드 내용인 질문들과 답변들도 API로 받아올 예정
          이후 질문 피드 페이지에서 레이아웃의 children props로 뿌릴 예정*/}
          <div className={Styles.questionArea}>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default AnswerLayout;
