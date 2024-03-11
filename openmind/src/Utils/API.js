import axios from "axios";

const baseUrl = "https://openmind-api.vercel.app/4-14/";

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

export const patchRequest = async (endpoint, data) => {
  try {
    const response = await axios.patch(`${baseUrl}${endpoint}`, data);

    if (response.status !== 200) {
      throw new Error(`${endpoint}에서 불러오는데 실패했습니다`);
    }

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const deleteRequest = async endpoint => {
  try {
    const response = await axios.delete(`${baseUrl}${endpoint}`);

    if (response.status !== 204) {
      throw new Error(`${endpoint}에서 불러오는데 실패했습니다`);
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};
// page관련 api
export const getPageRequest = async (offset, sort) => {
  return getRequest(`subjects/?limit=8&offset=${offset}&sort=${sort}`);
};
// answer관련 api
export const getAnswerQuestion = async id => {
  return getRequest(`subjects/${id}/questions/?limit=1000`);
};

export const deleteAnswerQuestion = async id => {
  return deleteRequest(`questions/${id}/`);
};

export const getAnswerUpdate = async subjectId => {
  return getRequest(`subjects/${subjectId}/questions/`);
};

export const postAnswerNumber = async (number, data) => {
  return postRequest(`questions/${number}/answers/`, data);
};

export const patchAnswerNumber = async number => {
  return patchRequest(`answers/${number}/`);
};
export const deleteAnswerNumber = async number => {
  return deleteRequest(`answers/${number}/`);
};

// reaction관련 api
export const postReaction = async questionId => {
  return postRequest(`questions/${questionId}/reaction/`);
};

//id 동적으로 받아오기
export const getSubjectInfo = async subjectId => {
  return getRequest(`subjects/${subjectId}/`);
};

export const getSubjectQuestion = async (subjectId, offset) => {
  return getRequest(`subjects/${subjectId}/questions/?limit=8&offset=${offset}`);
};

export const fetchData = async () => {
  const allPokemonData = [];
  for (let i = 1; i <= 50; i++) {
    const getName = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${i}`);
    const koreanName = getName.data.names.find(name => name.language.name === "ko");
    const URL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
    allPokemonData.push({ name: koreanName.name, imgUrl: URL });
  }
  console.log(allPokemonData);
  return allPokemonData;
};
