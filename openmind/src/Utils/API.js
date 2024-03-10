import axios from 'axios';

const baseUrl = 'https://openmind-api.vercel.app/4-14/';

const getRequest = async endpoint => {
  try {
    const response = await axios.get(`${baseUrl}${endpoint}`);

    if (response.status !== 200) {
      throw new Error(`${endpoint}에서 불러오는데 실패했습니다`);
    }

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const postRequest = async (endpoint, data) => {
  try {
    const response = await axios.post(`${baseUrl}${endpoint}`, data);

    if (response.status !== 201) {
      throw new Error(`${endpoint}에서 불러오는데 실패했습니다`);
    }

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

//임의로 변경해서 사용하시면 됩니다 :D!
/*export const getExampleRequest = async () => {
  return getRequest('/무엇이든지/엔드포인트로');
};

export const postExampleRequest = async () => {
  return postRequest('/무엇이든지/엔드포인트로', '데이터');
};*/

export const getPageRequest = async (offset, sort) => {
  return getRequest(`subjects/?limit=8&offset=${offset}&sort=${sort}`);
};

//id 동적으로 받아올 예정
export const getSubjectInfo = async subjectId => {
  return getRequest(`subjects/${subjectId}/`);
};

export const getSubjectQuestion = async (subjectId, offset) => {
  return getRequest(`subjects/${subjectId}/questions/?limit=8&offset=${offset}`);
};

/*export const getSubjectQuestion = async (limit, offset) => {
  return getRequest(`/4-14/subjects/3943/questions/?limit=${limit}&offset=${offset}`);
};*/

/*export const getSubjectQuestion = async (limit) => {
  return getRequest(`/4-14/subjects/3943/questions/?limit=${limit}`);
};*/
