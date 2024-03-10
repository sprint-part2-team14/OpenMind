import { useEffect, useState } from 'react';
import { getPageRequest } from '../Utils/API';
import BoxButton from '../Components/Button/BoxButton';
import LOGO from '../Assets/Images/imageLogo.svg';
import DropDown from '../Components/DropDown/DropDown';
import Styles from '../Styles/ListPage.module.css';
import Pagenation from '../Components/Pagenation';
import UserCard from '../Components/UserCard';

//(기본 정렬 순서는 “최신순”)
//“답변하러 가기” 버튼을 클릭시
//질문 받기로 생성한 id가 로컬 스토리지에 없으면 “/” 페이지로 이동
// 있으면 “/post/{id}/answer” 페이지로 이동
//PC에서 너비가 1200px 보다 커질 경우
//내부 내용의 위치는 고정하고 좌우 여백만 커짐
//PC에서 카드 컴포넌트의 너비는 220px
const LIMIT = 8;

const ListPage = () => {
  const [user, setUsers] = useState();
  const [total, setTotal] = useState();
  const [page, setPage] = useState(1);

  const fetchUserData = async (offset = 0, sort = 'time') => {
    const userData = await getPageRequest(offset, sort);

    console.log(userData);
    setTotal(userData.count);
    setUsers(userData.results);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleDropDown = sort => {
    fetchUserData(0, sort);
    setPage(1);
  };

  const handlePage = page => {
    console.log(page);
    setPage(page);
    fetchUserData(LIMIT * (page - 1));
  };

  console.log(total);

  return (
    <div className={Styles.container}>
      <div className={Styles.headerGroup}>
        <a href='/'>
          <img className={Styles.logo} src={LOGO} alt='로고 이미지' />
        </a>
        <BoxButton theme='outline' arrow>
          답변하러 가기
        </BoxButton>
      </div>
      <div className={Styles.subTitleGroup}>
        <h2 className={Styles.subTitle}>누구에게 질문할까요?</h2>
        <DropDown className={Styles.dropDown} onClick={handleDropDown} />
      </div>
      <div className={Styles.userCardContainer}>
        {user?.map(i => (
          <UserCard key={i.id} id={i.id} name={i.name} imageSource={i.imageSource} questionCount={i.questionCount} />
        ))}
      </div>
      <Pagenation totalItems={total} limit={8} page={page} onClick={handlePage} />
    </div>
  );
};

export default ListPage;
