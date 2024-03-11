import { useEffect, useState } from 'react';

import { ReactionAPI } from '../Utils/ReactionAPI';

import AnswerFeedCardRender from '../Components/AnswerPage/AnswerFeedCardRender';
import PostnAnswerLayout from '../Layout/PostnAnswerLayout';
import AnswerDeleteButton from '../Components/AnswerPage/AnswerDeleteButton';
import DeleteButton from '../Components/Button/DeleteButton';

const AnswerPage = () => {
  const [imgSource, setImgSource] = useState();
  const [name, setName] = useState();
  const [count, setCount] = useState();
  const [results, setResults] = useState([]);

  // const param = useParams();
  const subjectId = 3943; //param.id

  // api를 먼저가져오기
  async function apiGet() {
    const answerApi = await ReactionAPI(`https://openmind-api.vercel.app/4-14/subjects/${subjectId}/`, 'GET');
    const questionApi = await ReactionAPI(
      `https://openmind-api.vercel.app/4-14/subjects/${subjectId}/questions/`,
      'GET'
    );
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
    <>
      <PostnAnswerLayout name={name} imageSource={imgSource} questionCount={count}>
        <DeleteButton onClick={AnswerDeleteButton} setCount={setCount}>
          삭제하기
        </DeleteButton>
        <AnswerFeedCardRender
          subjectId={subjectId}
          name={name}
          imageSource={imgSource}
          results={results}
          setResults={setResults}
        />
      </PostnAnswerLayout>
    </>
  );
};

export default AnswerPage;
