import KEBAB_SRC from '../Assets/Icon/iconMore.svg';
import Styles from '../Styles/FeedCard.module.css';

import Reaction from '../Components/Reaction';
import BadgeBrown from '../Components/BadgeBrown';
import BadgeGray from '../Components/BadgeGray';
import { ReactionAPI } from '../Utils/ReactionAPI';

const AnswerFeedCardRender = ({result, name, imageSource}) => {
  let answerData;
  const targetValue = (event) =>{
    answerData = event.target.value
  }

  const feedAnswer = async (index) => {
    const response = await ReactionAPI(`https://openmind-api.vercel.app/4-14/questions/${index}/answers/`, 'POST', 
    {questionId :	index,
    content :	answerData,
    isRejected :	true,
    team	: '4-14'} )
    if(Object.keys(response).length>3){
      window.location.reload()
    }
  };

  const cardData=[]
  for(let index of result){
    cardData.push(
      <div className={Styles.container} key={index.id}>
      <div className={Styles.nav}>
        {index.answer === null ? <BadgeGray/> : <BadgeBrown />}
        <img className={Styles.kebab} src={KEBAB_SRC} />
      </div>
      <div>
        <p>질문 · {index.createdAt}</p>
        <p>{index.content}</p>
        <div>
          <img src={imageSource} alt='프로필이미지'></img>
          <div>
            <p>{name}</p>
            <div>
            {index.answer !== null ? <p>답변 : {index.answer.content}</p> : 
              <div>
                  <label htmlFor="answer"></label>
                  <input type="text" id="answer" onChange={(event)=>{targetValue(event)}} placeholder="답변을 입력해주세요"></input> 
                  <button onClick={() => feedAnswer(index.id)}>답변 하기</button>
              </div>}
            </div>
          </div>
        </div>
      </div>
      <div className={Styles.line}></div>
      <Reaction id={index.id}/>
    </div>
    )
  }
  return(
  <>
  {cardData}
  </>
  );
}
export default AnswerFeedCardRender;