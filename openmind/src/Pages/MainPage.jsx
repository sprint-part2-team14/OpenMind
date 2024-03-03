import BoxButton from '../Components/BoxButton';
import IMAGE_LOGO from '../Assets/Images/imageLogo.svg';
import IMAGE_MAINPAGE from '../Assets/Images/imageMainPage.svg';
import InputField from '../Components/InputField';

const MainPage = () => {
  return (
    <div>
      <BoxButton theme='outline' state='default' text='답변하러 가기' />
      <img src={IMAGE_LOGO} alt='이미지 로고' />
      <div>
        <InputField />
        <BoxButton />
      </div>
      <img src={IMAGE_MAINPAGE} alt='메인페이지 로고 ' />
    </div>
  );
};

export default MainPage;
