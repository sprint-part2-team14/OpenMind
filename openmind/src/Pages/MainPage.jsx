import BoxButton from '../Components/Button/BoxButton';
import IMAGE_LOGO from '../Assets/Images/imageLogo.svg';
import InputField from '../Components/Input/InputField';
import Styles from '../Styles/MainPage.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { postRequest } from '../Utils/API';

const MainPage = () => {
  const [userId, setUserId] = useState('');
  const navigate = useNavigate();

  const handleUserId = e => {
    setUserId(e.target.value);
  };

  const handleIdOnClick = async () => {
    if (userId) {
      try {
        const result = await postRequest('subjects/', { name: userId });
        navigate(`/post/${result.id}/answer`);
        localStorage.setItem('subjectId', result.id);
      } catch (error) {
        console.error('작업 수행 중 오류 발생 : ', error);
      }
    } else alert('이름을 입력해주세요');
  };

  return (
    <div className={Styles.body}>
      <div className={Styles.container}>
        <a href='/'>
          <img className={Styles.logoBox} src={IMAGE_LOGO} alt='메인페이지 로고 ' />
        </a>
        <Link to='/list?page=1&sort=createdAt'>
          <div className={Styles.headButton}>
            <BoxButton theme='outline' arrow='true'>
              질문하러 가기
            </BoxButton>
          </div>
        </Link>
        <div className={Styles.inputBox}>
          <InputField value={userId} onChange={handleUserId} />
          <BoxButton onClick={handleIdOnClick}>질문 받기</BoxButton>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
