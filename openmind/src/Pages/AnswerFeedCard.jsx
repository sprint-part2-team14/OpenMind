import { ReactionAPI } from '../Utils/ReactionAPI';
import { useEffect, useState } from 'react';

import AnswerFeedCardRender from './AnswerFeedCardRender';

const AnswerFeedCard = ({ id, name, imageSource }) => {
  const [result, setResult] = useState([]);

  async function apiGet() {
    const questionApi = await ReactionAPI(`https://openmind-api.vercel.app/4-14/subjects/${id}/questions/`, 'GET');
    console.log(questionApi);
    setResult(questionApi.results);
  }
  useEffect(() => {
    apiGet();
  }, []);
  console.log(result);

  return <AnswerFeedCardRender result={result} name={name} imageSource={imageSource} />;
};

export default AnswerFeedCard;
