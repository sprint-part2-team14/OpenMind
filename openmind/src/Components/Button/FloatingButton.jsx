import { useState, useEffect } from 'react';
import Styles from '../../Styles/FloatingButton.module.css';

const FloatingButton = ({ children, ...rest }) => {
  const [buttonText, setButtonText] = useState(children);

  useEffect(() => {
    const updateButtonText = () => {
      // 화면 너비에 따라 버튼 안의 텍스트 변경
      const text = window.innerWidth > 768 ? '질문 작성하기' : '질문 작성';
      setButtonText(text);
    };

    // 컴포넌트 마운트 시 화면 너비 체크
    updateButtonText();

    // 화면 크기 변경 시 업데이트
    window.addEventListener('resize', updateButtonText);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => window.removeEventListener('resize', updateButtonText);
  }, []); // 의존성 배열이 빈 배열이므로, 마운트와 언마운트 시에만 실행됨

  return (
    <button className={Styles.floatingButton} {...rest}>
      {buttonText}
    </button>
  );
};

export default FloatingButton;
