import Styles from "../../Styles/FeedCard.module.css";

import Reaction from "../Reaction/Reaction";
import BadgeBrown from "../Badge/BadgeBrown";
import BadgeGray from "../Badge/BadgeGray";
import { ReactionAPI } from "../../Utils/ReactionAPI";
import AnswerKebab from "./AnswerKebab";
import { useState } from "react";
import { patchRequest } from "../../Utils/API";

import { ReactComponent as KEBAB_SRC } from "../../Assets/Icon/iconMore.svg";

const AnswerFeedCardRender = ({ subjectId, imageSource, results, setResults }) => {
  const [fix, setFix] = useState({}); // 수정하기
  const [answerData, setAnswerData] = useState({}); // 답변 데이터
  const [fixData, setFixData] = useState({}); // 수정 데이터

  const targetValue = event => {
    setAnswerData({ [event.target.name]: event.target.value }); // 각각 feedcard에 주기 위해 객체로 선언
  };

  const fixTargetValue = event => {
    setFixData({ [event.target.name]: event.target.value });
  };

  const feedAnswer = async number => {
    // number = index.id
    const response = await ReactionAPI(`https://openmind-api.vercel.app/4-14/questions/${number}/answers/`, "POST", {
      questionId: number,
      content: answerData[number],
      isRejected: true,
      team: "4-14",
    });
    if (Object.keys(response).length > 3) {
      // prettier-ignore
      setResults((await ReactionAPI(`https://openmind-api.vercel.app/4-14/subjects/${subjectId}/questions/`, "GET")).results);
    }
  };

  const feedFix = async (number, index) => {
    // number = index.answer.id
    const response = await patchRequest(`answers/${number}/`, {
      content: fixData[index.id],
      isRejected: true,
    });
    if (Object.keys(response).length > 3) {
      setFix({ [number]: false });
      // prettier-ignore
      setResults((await ReactionAPI(`https://openmind-api.vercel.app/4-14/subjects/${subjectId}/questions/`, "GET")).results);
    }
  };

  const cardData = results.map(index => (
    <div className={Styles.container} key={index.id}>
      {console.log(index)}
      <header className={Styles.nav}>
        {index.answer === null ? <BadgeGray /> : <BadgeBrown />}
        {index.answer !== null ? <AnswerKebab setFix={setFix} number={index.answer.id} /> : <KEBAB_SRC />}
      </header>
      <main>
        <p>질문 · {index.createdAt}</p>
        <p>{index.content}</p>
        <div>
          <img src={imageSource} alt='프로필이미지'></img>
          <div>
            {index.answer !== null ? (
              fix[index.answer.id] === true ? (
                <div>
                  <label htmlFor='fix'></label>
                  <input
                    type='text'
                    id='fix'
                    name={index.id}
                    value={fixData[index.id] !== undefined ? fixData[index.id] : index.answer.content}
                    onChange={event => {
                      fixTargetValue(event);
                    }}
                    placeholder='답변을 입력해주세요'></input>
                  <button onClick={() => feedFix(index.answer.id, index)}>수정 완료</button>
                </div>
              ) : (
                <p>답변 : {index.answer.content}</p>
              )
            ) : (
              <div>
                <label htmlFor='answer'></label>
                <input
                  type='text'
                  id='answer'
                  name={index.id} // 각각 feedcard마다의 이름을 위해서
                  value={answerData[index.id] !== undefined ? answerData[index.id] : ""} //사용자가 적는 답변(index.id를 통해 무슨 feedcard인지 구분가능)
                  onChange={event => {
                    targetValue(event);
                  }}
                  placeholder='답변을 입력해주세요'></input>
                <button onClick={() => feedAnswer(index.id)}>답변 하기</button>
              </div>
            )}
          </div>
        </div>
      </main>
      <footer>
        <div className={Styles.line}></div>
        <Reaction id={index.id} />
      </footer>
    </div>
  ));

  return <>{cardData}</>;
};
export default AnswerFeedCardRender;
