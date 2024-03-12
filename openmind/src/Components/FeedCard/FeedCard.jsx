import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSubjectInfo } from '../../Utils/API';
import processTime from '../../Utils/processTime';

import Styles from '../../Styles/FeedCard.module.css';

import FeedQuestion from './FeedQuestion';
import RejectAnswer from './RejectAnswer';
import SentAnswer from './SentAnswer';
import Reaction from '../Reaction/Reaction';
import BadgeBrown from '../Badge/BadgeBrown';
import BadgeGray from '../Badge/BadgeGray';

const type = '질문';

const FeedCard = ({ id, createdAt, content, answer }) => {
  const { subjectId } = useParams();
  const [userData, setUserData] = useState(null);

  const fetchUserData = async () => {
    try {
      const userResult = await getSubjectInfo(subjectId);
      setUserData(userResult);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [subjectId]);

  return (
    <div className={Styles.container}>
      <div className={Styles.nav}>{answer?.content.length ? <BadgeBrown /> : <BadgeGray />}</div>
      <FeedQuestion type={type} createdAt={processTime(createdAt)}>
        {content}
      </FeedQuestion>
      {/* 삼항 연산자를 중첩하여 Answer부분을 조건부 렌더링_추후 리팩토링 */}
      {answer?.isRejected ? (
        <RejectAnswer profileImg={userData?.imageSource} username={userData?.name} createdAt={processTime(createdAt)} />
      ) : !answer?.isRejected && answer?.content.length ? (
        <SentAnswer profileImg={userData?.imageSource} username={userData?.name} createdAt={processTime(createdAt)}>
          {answer.content}
        </SentAnswer>
      ) : (
        <div className={Styles.emptyAnswer}>아직 답변이 없습니다.</div>
      )}
      <p className={Styles.line}></p>
      <Reaction id={id} />
    </div>
  );
};

export default FeedCard;
