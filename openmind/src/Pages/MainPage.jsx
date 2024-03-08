import BoxButton from '../Components/BoxButton';
import IMAGE_LOGO from '../Assets/Images/imageLogo.svg';
import InputField from '../Components/InputField';
import Styles from '../Styles/MainPage.module.css';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div className={Styles.body}>
      <div className={Styles.container}>
        <a href='/'>
          <img className={Styles.logoBox} src={IMAGE_LOGO} alt='메인페이지 로고 ' />
        </a>
        <Link to='/list?page=1&sort=createdAt'>
          <div className={Styles.headButton}>
            <BoxButton className={Styles.headButton} theme='outline' text='질문하러 가기' />
          </div>
        </Link>
        <div className={Styles.inputBox}>
          <InputField />
          <BoxButton />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
