import Styles from "../../Styles/FeedCard.module.css";

import Reaction from "../Reaction/Reaction";
import BadgeBrown from "../Badge/BadgeBrown";
import BadgeGray from "../Badge/BadgeGray";
import AnswerKebab from "./AnswerKebab";
import { useState } from "react";
import { getAnswerUpdate, postAnswerNumber, patchAnswerNumber } from "../../Utils/API";

import { ReactComponent as KEBAB_SRC } from "../../Assets/Icon/iconMore.svg";

const AnswerFeedCardRender = ({ subjectId, imageSource, results, setResults }) => {
  const [fix, setFix] = useState({}); // 수정하기(여러 데이터이므로 객체로 선언)
  const [answerData, setAnswerData] = useState({}); // 답변 데이터(여러 데이터이므로 객체로 선언)
  const [fixData, setFixData] = useState({}); // 수정 데이터(여러 데이터이므로 객체로 선언)

  // input의 value에 따라 답변하기의 상태를 변화해주기 위해 target을 활용하여 객체로 선언
  const targetValue = event => {
    setAnswerData({ [event.target.name]: event.target.value });
  };
  // input의 value에 따라 수정하기의 상태를 변화해주기 위해 target을 활용하여 객체로 선언
  const fixTargetValue = event => {
    setFixData({ [event.target.name]: event.target.value });
  };

  const updateFeed = async () => {
    // 새로고침 로직
    setResults((await getAnswerUpdate(subjectId)).results);
  };

  const feedAnswer = async number => {
    // number = index.id
    const response = await postAnswerNumber(number, {
      questionId: number,
      content: answerData[number],
      isRejected: true,
      team: "4-14",
    });
    if (Object.keys(response).length > 3) {
      updateFeed();
    }
  };

  const feedFix = async (number, index) => {
    // number = index.answer.id
    const response = await patchAnswerNumber(number, {
      content: fixData[index.id],
      isRejected: true,
    });
    if (Object.keys(response).length > 3) {
      setFix({ [number]: false });
      updateFeed();
    }
  };

  const cardData = results.map(index => (
    <div className={Styles.container} key={index.id}>
      {console.log(index)}
      <header className={Styles.nav}>
        {index.answer === null ? <BadgeGray /> : <BadgeBrown />}
        {index.answer !== null ? (
          <AnswerKebab
            setFix={setFix}
            setAnswerData={setAnswerData}
            setFixData={setFixData}
            number={index.answer.id}
            updateFeed={updateFeed}
          />
        ) : (
          <KEBAB_SRC />
        )}
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
