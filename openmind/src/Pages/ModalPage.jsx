import React, { useState } from 'react';
import Styles from '../Styles/ModalPage.module.css';
import ICON_MESSAGE from '../Assets/Icon/iconMessages.svg';
import ICON_CLOSE from '../Assets/Icon/iconClose.svg';
import InputTextArea from '../Components/Input/InputTextArea';
import BoxButton from '../Components/Button/BoxButton';
import { postRequest } from '../Utils/API';

const ModalPage = ({ onClose, userData }) => {
  const [question, setQuestion] = useState('');

  const handleQuestion = e => {
    setQuestion(e.target.value);
  };

  const handleContainerClick = e => {
    if (e.target.classList.contains(Styles.container)) {
      onClose();
    }
  };

  const handleQuestionOnClick = async () => {
    if (question) {
      try {
        await postRequest(`subjects/${userData?.id}/questions/`, { content: question });
        window.location.reload();
        onClose();
      } catch (error) {
        console.error('작업 수행 중 오류 발생 : ', error);
      }
    } else alert('질문을 입력해주세요');
  };

  return (
    <div className={Styles.container} onClick={handleContainerClick}>
      <div className={Styles.modalBody}>
        <div className={Styles.modalContent}>
          <div className={Styles.header}>
            <div className={Styles.headerBox}>
              <img className={Styles.icon} src={ICON_MESSAGE} alt="메시지 아이콘" />
              <p className={Styles.headerFont}>질문을 작성하세요</p>
            </div>
            <button>
              <img onClick={onClose} className={Styles.icon} src={ICON_CLOSE} alt="닫기 아이콘" />
            </button>
          </div>
          <div className={Styles.profile}>
            <p className={Styles.profileFont}>To.</p>
            <img className={Styles.profileImg} src={userData?.imageSource} alt="프로필 이미지" />
            <p className={Styles.profileContext}>{userData?.name}</p>
          </div>
          <form className={Styles.inputText}>
            <InputTextArea value={question} onChange={handleQuestion} />
            <BoxButton type="submit" onClick={handleQuestionOnClick} theme="outline">
              질문 보내기
            </BoxButton>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalPage;
