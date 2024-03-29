import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { getSubjectInfo, getSubjectQuestion } from '../Utils/API';
import useModal from '../Hooks/useModal';
import PostnAnswerLayout from '../Layout/PostnAnswerLayout';
import FeedCard from '../Components/FeedCard/FeedCard';
import FloatingButton from '../Components/Button/FloatingButton';
import ModalPage from './ModalPage';
import Styles from '../Styles/PostPage.module.css';
import NO_QUESTION from '../Assets/Images/imageNoQuestion.svg';

const PostPage = () => {
  const [askData, setAskData] = useState([]); //질문 데이터
  const [userData, setUserData] = useState(null); //유저 데이터
  const [offset, setOffset] = useState(0); //다음 데이터 요청 시 시작점
  const [hasMore, setHasMore] = useState(true); //더 로드할 데이터가 있는지
  const [loading, setLoading] = useState(false); //데이터 로딩 상태
  const lastElementRef = useRef(null); //페이지 하단에 위치하고 Intersection Observer에 의해 관찰될 요소를 참조하기 위한 ref

  const { subjectId } = useParams();
  const { modalState, openModal, closeModal } = useModal();

  //질문 데이터 가져오기 (비동기)
  const fetchAskData = useCallback(async () => {
    if (loading || !hasMore) return;
    setLoading(true);

    try {
      const askResult = await getSubjectQuestion(subjectId, offset);
      const askResults = askResult.results;
      setAskData(prevAskData => [...prevAskData, ...askResults]);

      // 다음 데이터가 없을 경우 hasMore를 false로 설정
      setHasMore(askResult.next !== null);
      //기존 offset 값에 방금 로드된 데이터의 길이(askResults.length)를 더하여 새로운 offset 값을 계산
      setOffset(prevOffset => prevOffset + askResults.length);
    } catch (error) {
      console.error('Error fetching data:', error.message);
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  }, [subjectId, offset, loading, hasMore]); //useCallback 메모이제이션

  //유저 프로필 데이터 가져오기 (비동기)
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userResult = await getSubjectInfo(subjectId);
        setUserData(userResult);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchUserData();
  }, [subjectId]);

  //Intersection Observer 설정
  //페이지 하단의 lastElementRef가 viewport에 진입하는 순간을 감지하여,
  //추가 데이터 로드를 위해 fetchAskData() 함수를 호출
  useEffect(() => {
    if (!hasMore) return;

    const observerInstance = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          fetchAskData();
        }
      },
      { threshold: 0.1 }
    );

    if (lastElementRef.current) {
      observerInstance.observe(lastElementRef.current);
    }

    return () => observerInstance.disconnect();
  }, [fetchAskData, hasMore]);

  // 새로고침 시 상태 초기화
  useEffect(() => {
    setAskData([]);
    setOffset(0);
    setHasMore(true);
    fetchAskData();
  }, []);

  return (
    <div>
      {askData?.length ? (
        <div className={Styles.background}>
          <PostnAnswerLayout
            name={userData?.name}
            imageSource={userData?.imageSource}
            questionCount={userData?.questionCount}>
            {askData.map(questionData => (
              <FeedCard key={questionData?.id} {...questionData} />
            ))}
            {loading && <div className={Styles.loading}>Loading...</div>}
            <div ref={lastElementRef} style={{ height: '20px' }}></div>
            {!hasMore && <div className={Styles.loading}>No more questions to load.</div>}
          </PostnAnswerLayout>
          <div className={Styles.button}>
            <FloatingButton onClick={openModal}>질문 작성</FloatingButton>
          </div>
          {modalState && <ModalPage onClose={closeModal} userData={userData} />}
        </div>
      ) : (
        <div className={Styles.background}>
          <PostnAnswerLayout
            name={userData?.name}
            imageSource={userData?.imageSource}
            questionCount={userData?.questionCount}>
            <div className={Styles.noQuestion}>
              <img src={NO_QUESTION} className={Styles.noQuestionImg} alt="질문 없음" />
            </div>
            {loading && <div className={Styles.loading}>Loading...</div>}
            <div ref={lastElementRef} style={{ height: '20px' }}></div>
          </PostnAnswerLayout>
          <div className={Styles.button}>
            <FloatingButton onClick={openModal}>질문 작성</FloatingButton>
          </div>
          {modalState && <ModalPage onClose={closeModal} userData={userData} />}
        </div>
      )}
    </div>
  );
};

export default PostPage;
