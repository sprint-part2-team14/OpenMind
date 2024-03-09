import { useEffect, useState } from 'react';
import { getPostIdRequest } from '../Utils/API';
import BoxButton from '../Components/Button/BoxButton';
import LOGO from '../Assets/Images/imageLogo.svg';
import DropDown from '../Components/DropDown/DropDown';
import Styles from '../Styles/ListPage.module.css';
import Pagenation from '../Components/PageNation';
import UserCard from '../Components/UserCard';

// 오픈마인드 로고를 클릭하면 “/” 페이지로 이동
//현재 페이지, 정렬 순서를 설정해서 카드 리스트 조회 요청
//(기본 정렬 순서는 “최신순”)
//“답변하러 가기” 버튼을 클릭시
//질문 받기로 생성한 id가 로컬 스토리지에 없으면 “/” 페이지로 이동
// 있으면 “/post/{id}/answer” 페이지로 이동
//PC에서 너비가 1200px 보다 커질 경우
//내부 내용의 위치는 고정하고 좌우 여백만 커짐
//PC에서 카드 컴포넌트의 너비는 220px
const ListPage = () => {
  const [user, setUsers] = useState();

  useEffect(() => {
    const fetchUserData = async () => {
      const userData = await getPostIdRequest();
      setUsers(userData.results);
    };
    fetchUserData();
  }, []);

  console.log(user);

  const handleOnClick = () => {
    console.log(1);
  };

  return (
    <div className={Styles.container}>
      <div className={Styles.headerGroup}>
        <a href='/'>
          <img className={Styles.logo} src={LOGO} alt='로고 이미지' />
        </a>
        <BoxButton theme='outline' state='default' text='답변하러 가기' />
      </div>
      <div className={Styles.subTitleGroup}>
        <h2 className={Styles.subTitle}>누구에게 질문할까요?</h2>
        <DropDown />
      </div>
      <div className={Styles.userCardContainer}>
        {user?.map(i => (
          <UserCard key={i.id} id={i.id} name={i.name} imageSource={i.imageSource} questionCount={i.questionCount} />
        ))}
      </div>
      <Pagenation totalItems={59} limit={8} page={1} setPage={handleOnClick} />
    </div>
  );
};

export default ListPage;
