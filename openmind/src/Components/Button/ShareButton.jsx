import { useEffect } from 'react';
import FACE_BOOK from '../../Assets/Icon/iconFaceBook.svg';
import KAKAO from '../../Assets/Icon/iconKakaoTalk.svg';
import LINK from '../../Assets/Icon/iconLink.svg';
import Styles from '../../Styles/ShareButton.module.css';

const ShareButton = ({ onClickLink, onClickFacebook, ...rest }) => {
  const { Kakao } = window;
  const realUrl = 'http://localhost:3000'; //배포하면 배포 주소로 변경
  //const resultUrl = window.location.href; //로컬 주소

  useEffect(() => {
    Kakao.cleanup();
    Kakao.init('22869ac23d9010c1d34f02399bf1e354'); //JS 키
    console.log(Kakao.isInitialized());
  }, []);

  const shareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '오픈마인드 (OpenMind)',
        description: '질문과 답변을 통해 마음을 열고 대화 나누는 소통 플랫폼, 오픈마인드',
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/2451/2451913.png',
        link: {
          mobileWebUrl: realUrl,
        },
      },
      buttons: [
        {
          title: '질문하러 가기',
          link: {
            mobileWebUrl: realUrl,
          },
        },
      ],
    });
  };

  return (
    <div className={Styles.shareButton}>
      <button type='button' className={Styles.link} onClick={onClickLink} {...rest}>
        <img src={LINK} alt='링크 공유 버튼' />
      </button>
      <button type='button' className={Styles.kakao} onClick={shareKakao} {...rest}>
        <img src={KAKAO} alt='카카오톡 공유 버튼' />
      </button>
      <button type='button' className={Styles.faceBook} onClick={onClickFacebook} {...rest}>
        <img src={FACE_BOOK} alt='페이스북 공유 버튼' />
      </button>
    </div>
  );
};

export default ShareButton;
