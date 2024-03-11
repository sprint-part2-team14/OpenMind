//답변하기

//답변이 입력되면 '답변 완료' 버튼이 활성화가 됩니다.
//답변이 완료된 질문에 케밥 버튼을 눌러서 나온 '수정하기' 버튼을 누르면 해당 질문칸은 수정이 가능한 질문칸으로 변경이 됩니다.
//수정할 내용이 없으면 '수정완료' 버튼은 활성화 되지 않습니다.
//화면 최상단의 '삭제하기' 버튼을 누르면 받은 질문들과 피드가 한 번에 삭제가 됩니다.
// import {useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { getSubjectInfo, getAnswerUpdate } from '../Utils/API';
import AnswerFeedCardRender from '../Components/AnswerPage/AnswerFeedCardRender';
import PostnAnswerLayout from '../Layout/PostnAnswerLayout';
import DeleteButton from '../Components/Button/DeleteButton';
import mainStyles from '../Styles/AnswerFeedCard.module.css';

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
    <>
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
    </>
  );
};

export default AnswerPage;
