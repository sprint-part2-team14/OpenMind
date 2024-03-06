import KEBAB_SRC from '../Assets/Icon/iconMore.svg';
import Styles from '../Styles/FeedCard.module.css';

import Reaction from '../Components/Reaction';
import BadgeBrown from '../Components/BadgeBrown';
import BadgeGray from '../Components/BadgeGray';

const AnswerFeedCardRender = ({result}) => {
  const a =[]
  for(let index of result){
    a.push(
      <div className={Styles.container} key={index.id}>
      <div className={Styles.nav}>
        {index.answer === null ? <BadgeGray/> : <BadgeBrown />}
        <img className={Styles.kebab} src={KEBAB_SRC} />
      </div>
      <div>
        <p>질문 · {index.createdAt}</p>
        <p>{index.content}</p>
        <div>
        {/* {index.answer !== null ? <p>답변 : {index.answer.content}</p> : 
          <div>
              <label htmlFor="answer"></label>
              <input type="text" id="answer" value={answers[index.id] || ''} onChange={(event) => handleAnswerChange(event, index.id)} placeholder="답변을 입력해주세요"></input> 
              <button onClick={() => handleAnswer(index.id)}>답변 하기</button>
          </div>} */}
        </div>
      </div>
      <div className={Styles.line}></div>
      <Reaction id={index.id}/>
    </div>
    )
  }
  return(
  <>{a}</>
  );
}
export default AnswerFeedCardRender;