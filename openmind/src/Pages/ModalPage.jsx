import React from 'react';
import Styles from '../Styles/ModalPage.module.css';
import ICON_MESSAGE from '../Assets/Icon/iconMessages.svg';
import ICON_CLOSE from '../Assets/Icon/iconClose.svg';
import InputTextArea from '../Components/InputTextArea';
import BoxButton from '../Components/BoxButton';
// 이후에 사용할 때는 해당 모달 Page를
// Utils 폴더에 있는 모달 포탈로 감싸서 원하는 위치에 넣어주면 됨
// props로 close 이벤트를 상위로 전달과 데이터를 받아옴

const ModalPage = ({ onClose, userData }) => {
  const { imageSource, name } = userData;
  return (
    <div className={Styles.container} onClick={onClose}>
      <div className={Styles.modalBody}>
        <div className={Styles.modalContent}>
          <div className={Styles.header}>
            <div className={Styles.headerBox}>
              <img className={Styles.icon} src={ICON_MESSAGE} alt='메시지 아이콘' />
              <p className={Styles.headerFont}>질문을 작성하세요</p>
            </div>
            <button>
              <img onClick={onClose} className={Styles.icon} src={ICON_CLOSE} alt='닫기 아이콘' />
            </button>
          </div>
          <div className={Styles.profile}>
            <p className={Styles.profileFont}>To.</p>
            <img className={Styles.icon} src={imageSource} alt='닫기 아이콘' />
            <p className={Styles.profileContext}>{name}</p>
          </div>
          <div className={Styles.inputText}>
            <InputTextArea />
          </div>
          <div className={Styles.sendButton}>
            <BoxButton theme='outline' text='질문 보내기' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalPage;
