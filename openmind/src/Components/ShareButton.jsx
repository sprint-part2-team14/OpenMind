import FACE_BOOK from '../Assets/Icon/iconFaceBook.svg';
import KAKAO from '../Assets/Icon/iconKakaoTalk.svg';
import LINK from '../Assets/Icon/iconLink.svg';
import Styles from '../Styles/ShareButton.module.css';

const ShareButton = () => {
  const handleOnClick = () => {
    // 변경 요망
    console.log(1);
  };
  return (
    <div className={Styles.shareButton}>
      <button type='button' className={Styles.link} onClick={handleOnClick}>
        <img src={LINK} alt='링크 공유 버튼' />
      </button>
      <button type='button' className={Styles.kakao} onClick={handleOnClick}>
        <img src={KAKAO} alt='카카오톡 공유 버튼' />
      </button>
      <button type='button' className={Styles.faceBook} onClick={handleOnClick}>
        <img src={FACE_BOOK} alt='페이스북 공유 버튼' />
      </button>
    </div>
  );
};

export default ShareButton;
