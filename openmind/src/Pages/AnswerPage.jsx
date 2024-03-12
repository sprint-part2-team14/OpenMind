import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSubjectInfo, getAnswerUpdate } from '../Utils/API';
import AnswerFeedCardRender from '../Components/AnswerPage/AnswerFeedCardRender';
import PostnAnswerLayout from '../Layout/PostnAnswerLayout';
import DeleteButton from '../Components/Button/DeleteButton';
import mainStyles from '../Styles/AnswerFeedCard.module.css';
import Styles from '../Styles/AnswerPage.module.css';

const AnswerPage = () => {
  const [imgSource, setImgSource] = useState();
  const [name, setName] = useState();
  const [count, setCount] = useState();
  const [results, setResults] = useState([]);

  const param = useParams();
  const subjectId = param.subjectId;

  // api를 먼저가져오기
  async function apiGet() {
    const answerApi = await getSubjectInfo(subjectId);
    const questionApi = await getAnswerUpdate(subjectId);
    // 가져온 결과를 저장
    setImgSource(answerApi.imageSource);
    setName(answerApi.name);
    setCount(answerApi.questionCount);
    //배열 참조를 비교하기 때문에 배열의 요소를 JSON으로 바꿔 비교할수있도록
    if (JSON.stringify(results) !== JSON.stringify(questionApi.results)) {
      setResults(questionApi.results);
    }
  }
  useEffect(() => {
    apiGet();
  }, [count, results]);

  return (
    <div className={Styles.container}>
      <PostnAnswerLayout name={name} imageSource={imgSource} questionCount={count}>
        <div className={mainStyles.delete}>
          <DeleteButton id={subjectId} setCount={setCount}>
            삭제하기
          </DeleteButton>
        </div>
        <AnswerFeedCardRender
          subjectId={subjectId}
          name={name}
          imageSource={imgSource}
          results={results}
          setResults={setResults}
        />
      </PostnAnswerLayout>
    </div>
  );
};

export default AnswerPage;
