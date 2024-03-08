import FACE_BOOK from '../Assets/Icon/iconFaceBook.svg';
import KAKAO from '../Assets/Icon/iconKakaoTalk.svg';
import LINK from '../Assets/Icon/iconLink.svg';
import Styles from '../Styles/ShareButton.module.css';

const ShareButton = ({ ...rest }) => {
  return (
    <div className={Styles.shareButton}>
      <button type='button' className={Styles.link} {...rest}>
        <img src={LINK} alt='링크 공유 버튼' />
      </button>
      <button type='button' className={Styles.kakao} {...rest}>
        <img src={KAKAO} alt='카카오톡 공유 버튼' />
      </button>
      <button type='button' className={Styles.faceBook} {...rest}>
        <img src={FACE_BOOK} alt='페이스북 공유 버튼' />
      </button>
    </div>
  );
};

export default ShareButton;
