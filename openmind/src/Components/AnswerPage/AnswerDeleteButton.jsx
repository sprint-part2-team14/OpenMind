import axios from 'axios';
import { ReactionAPI } from '../../Utils/ReactionAPI';

const AnswerDeleteButton = async setCount => {
  // const param = useParams();
  const id = 3943; //param.id
  const questionApi = await ReactionAPI(
    `https://openmind-api.vercel.app/4-14/subjects/${id}/questions/?limit=1000`,
    'GET'
  );
  const deleteApi = questionApi.results.map(questionIndex => {
    return axios.delete(`https://openmind-api.vercel.app/4-14/questions/${questionIndex.id}/`);
  });
  await Promise.all(deleteApi); //0까지 돌아가는걸 기다려주고
  setCount(
    (await ReactionAPI(`https://openmind-api.vercel.app/4-14/subjects/${id}/questions/?limit=1000`, 'GET')).count
  ); //새로 만든 api(=delete된데이터)를 가져옴
};

export default AnswerDeleteButton;
