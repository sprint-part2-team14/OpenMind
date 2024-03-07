const axios = require('axios');

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

const postRequest = async (endpoint, data) => {
  try {
    const response = await axios.post(`${baseUrl}${endpoint}`, data);

    if (response.status !== 200) {
      throw new Error(`${endpoint}에서 불러오는데 실패했습니다`);
    }

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

//임의로 변경해서 사용하시면 됩니다 :D!
export const getExampleRequest = async () => {
  return getRequest('/무엇이든지/엔드포인트로');
};

export const postExampleRequest = async () => {
  return postRequest('/무엇이든지/엔드포인트로');
};
