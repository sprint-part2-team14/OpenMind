import BoxButton from '../Components/Button/BoxButton';
import IMAGE_LOGO from '../Assets/Images/imageLogo.svg';
import InputField from '../Components/Input/InputField';
import Styles from '../Styles/MainPage.module.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const MainPage = () => {
  const [userId, setUserId] = useState(null);
  // const navigate = useNavigate();

  const handleUserId = e => {
    setUserId(e.target.value);
    console.log(e.target.value);
  };

  useEffect(() => {
    console.log('Current userId:', userId);
  }, [userId]);

  // const handleIdOnClick = () => {
  //   if (userId) {
  //   }
  // };

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
          <BoxButton>질문 받기</BoxButton>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
