import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchData, getPageRequest } from '../Utils/API';
import BoxButton from '../Components/Button/BoxButton';
import LOGO from '../Assets/Images/imageLogo.svg';
import DropDown from '../Components/DropDown/DropDown';
import Styles from '../Styles/ListPage.module.css';
import Pagenation from '../Components/Pagenation';
import UserCard from '../Components/UserCard';

const LIMIT = 8;

const ListPage = () => {
  const navigate = useNavigate();
  const [user, setUsers] = useState();
  const [total, setTotal] = useState();
  const [page, setPage] = useState(1);

  const fetchUserData = async (offset = 0, sort = 'time') => {
    const userData = await getPageRequest(offset, sort);

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
    setPage(page);
    fetchUserData(LIMIT * (page - 1));
  };

  const handleCardClick = subjectId => {
    navigate(`/post/${subjectId}`);
  };

  const handleAnswerBtn = subjectId => {
    if (subjectId === null) {
      navigate('/');
    }
    navigate(`/post/${subjectId}/answer`);
  };

  fetchData();

  return (
    <div className={Styles.container}>
      <div className={Styles.headerGroup}>
        <a href='/'>
          <img className={Styles.logo} src={LOGO} alt='로고 이미지' />
        </a>
        <BoxButton theme='outline' arrow onClick={handleAnswerBtn}>
          답변하러 가기
        </BoxButton>
      </div>
      <div className={Styles.subTitleGroup}>
        <h2 className={Styles.subTitle}>누구에게 질문할까요?</h2>
        <DropDown onClick={handleDropDown} />
      </div>
      <div className={Styles.userCardContainer}>
        {user?.map(i => (
          <UserCard
            key={i.id}
            id={i.id}
            name={i.name}
            imageSource={i.imageSource}
            questionCount={i.questionCount}
            onClick={() => handleCardClick(i.id)}
          />
        ))}
      </div>
      <div className={Styles.pagenation}>
        <Pagenation totalItems={total} limit={8} page={page} onClick={handlePage} />
      </div>
    </div>
  );
};

export default ListPage;
