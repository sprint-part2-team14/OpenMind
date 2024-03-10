import FACE_BOOK from '../../Assets/Icon/iconFaceBook.svg';
import KAKAO from '../../Assets/Icon/iconKakaoTalk.svg';
import LINK from '../../Assets/Icon/iconLink.svg';
import Styles from '../../Styles/ShareButton.module.css';

const ShareButton = ({ onClickLink, onClickKakao, onClickFacebook, ...rest }) => {
  return (
    <div className={Styles.shareButton}>
      <button type='button' className={Styles.link} onClick={onClickLink} {...rest}>
        <img src={LINK} alt='링크 공유 버튼' />
      </button>
      <button type='button' className={Styles.kakao} onClick={onClickKakao} {...rest}>
        <img src={KAKAO} alt='카카오톡 공유 버튼' />
      </button>
      <button type='button' className={Styles.faceBook} onClick={onClickFacebook} {...rest}>
        <img src={FACE_BOOK} alt='페이스북 공유 버튼' />
      </button>
    </div>
  );
};

export default ShareButton;
