import Styles from "../../Styles/FeedCard.module.css";

import Reaction from "../Reaction/Reaction";
import BadgeBrown from "../Badge/BadgeBrown";
import BadgeGray from "../Badge/BadgeGray";
import { ReactionAPI } from "../../Utils/ReactionAPI";
import AnswerKebab from "./AnswerKebab";
import { useState } from "react";

const AnswerFeedCardRender = ({ subjectId, imageSource, results, setResults }) => {
  const [fix, setFix] = useState(false); // 수정하기
  const [answerData, setAnswerData] = useState({}); // 답변 데이터

  const targetValue = event => {
    setAnswerData({ [event.target.name]: event.target.value }); // 각각 feedcard에 주기 위해 객체로 선언
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

  {
    console.log(results);
  }
  const cardData = results.map(index => (
    <div className={Styles.container} key={index.id}>
      {console.log(index)}
      <header className={Styles.nav}>
        {index.answer === null ? <BadgeGray /> : <BadgeBrown />}
        <AnswerKebab setFix={setFix} />
      </header>
      <main>
        <p>질문 · {index.createdAt}</p>
        <p>{index.content}</p>
        <div>
          <img src={imageSource} alt='프로필이미지'></img>
          <div>
            {index.answer !== null ? (
              fix ? (
                <div>
                  <label htmlFor='fix'></label>
                  <input
                    type='text'
                    id='fix'
                    onChange={event => {
                      targetValue(event);
                    }}
                    placeholder='답변을 입력해주세요'></input>
                  <button onClick={() => feedAnswer(index.id)}>수정 완료</button>
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
                  value={answerData !== undefined ? answerData[index.id] : ""} //사용자가 적는 답변(index.id를 통해 무슨 feedcard인지 구분가능)
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
