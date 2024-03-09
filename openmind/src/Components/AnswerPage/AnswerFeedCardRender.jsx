import KEBAB_SRC from '../../Assets/Icon/iconMore.svg';
import Styles from '../../Styles/FeedCard.module.css';

import Reaction from '../Reaction';
import BadgeBrown from '../BadgeBrown';
import BadgeGray from '../BadgeGray';
import { ReactionAPI } from '../../Utils/ReactionAPI';

const AnswerFeedCardRender = ({id, name, imageSource, result, setResult}) => {
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
      setResult((await ReactionAPI(`https://openmind-api.vercel.app/4-14/subjects/${id}/questions/`, 'GET')).results)
    }
  };

  const cardData = result.map((index) => (
    <div className={Styles.container} key={index.id}>
      <header className={Styles.nav}>
        {index.answer === null ? <BadgeGray/> : <BadgeBrown />}
        <img className={Styles.kebab} src={KEBAB_SRC} />
      </header>
      <main>
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
      </main>
      <footer>
        <div className={Styles.line}></div>
        <Reaction id={index.id}/>
      </footer>
    </div>
  ));
  
  return(
  <>{cardData}</>
  );
}
export default AnswerFeedCardRender;