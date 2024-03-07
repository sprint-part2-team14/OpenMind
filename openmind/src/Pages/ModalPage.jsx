import React from 'react';
import Styles from '../Styles/ModalPage.css';

// 이후에 사용할 때는 해당 모달 Page를
// Utils 폴더에 있는 모달 포탈로 감싸서 원하는 위치에 넣어주면 됨
// props로 close 이벤트를 상위로 전달과 데이터를 받아옴

const ModalPage = ({ onClose }) => {
  // const { imageSource, name } = userData;
  return (
    <div className={Styles.modalPage}>
      <div className={Styles.container} onClick={onClose}>
        <div className={Styles.modalBody}>
          <div className={Styles.modalContent}></div>
        </div>
      </div>
    </div>
  );
};

export default ModalPage;
