//답변하기

//답변이 입력되면 '답변 완료' 버튼이 활성화가 됩니다.
//답변이 완료된 질문에 케밥 버튼을 눌러서 나온 '수정하기' 버튼을 누르면 해당 질문칸은 수정이 가능한 질문칸으로 변경이 됩니다.
//수정할 내용이 없으면 '수정완료' 버튼은 활성화 되지 않습니다.
//화면 최상단의 '삭제하기' 버튼을 누르면 받은 질문들과 피드가 한 번에 삭제가 됩니다.
// import {useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';

import { ReactionAPI } from '../Utils/ReactionAPI';

import AnswerFeedCard from './AnswerFeedCard';
import PostnAnswerLayout from '../Layout/PostnAnswerLayout';

const AnswerPage = () => {
  const [imgSource, setImgSource] = useState();
  const [name, setName] = useState();
  const [count, setCount] = useState();
  // const param = useParams();
  const id = 3943; //param.id
  
  // api를 먼저가져오기
  async function apiGet(){
    const answerApi = await ReactionAPI(`https://openmind-api.vercel.app/4-14/subjects/${id}/`, 'GET');
    // 가져온 결과를 저장
    setImgSource(answerApi.imageSource);
    setName(answerApi.name);
    setCount(answerApi.questionCount);
  }
  useEffect(()=>{apiGet()}, []);

  return(
    <PostnAnswerLayout name={name} imageSource={imgSource} questionCount={count}>
      <AnswerFeedCard id={id} name={name} imageSource={imgSource}/>
    </PostnAnswerLayout>
  );
};

export default AnswerPage;