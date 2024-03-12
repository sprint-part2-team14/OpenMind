const milisec = 1000;
const minute = milisec * 60;
const hour = minute * 60;
const day = hour * 24;
const month = day * 31;
const year = month * 12;

const TIME = {
  milisec,
  minute,
  hour,
  day,
  month,
  year,
};

const processTime = createdAt => {
  const currentTime = new Date();
  const createdAtDate = new Date(createdAt);
  const passedTime = currentTime - createdAtDate;
  const { minute, hour, day, month, year } = TIME;

  if (year * 2 <= passedTime) {
    return `${Math.floor(passedTime / year)}년 전`;
  }
  if (year <= passedTime) {
    return '1년 전';
  }
  if (month * 2 <= passedTime) {
    return `${Math.floor(passedTime / month)}달 전`;
  }
  if (month <= passedTime) {
    return '1달 전';
  }
  if (day * 2 <= passedTime) {
    return `${Math.floor(passedTime / day)}일 전`;
  }
  if (day <= passedTime) {
    return '1일 전';
  }
  if (hour * 2 <= passedTime) {
    return `${Math.floor(passedTime / hour)}시간 전`;
  }
  if (hour <= passedTime) {
    return '1시간 전';
  }
  if (minute * 2 <= passedTime) {
    return `${Math.floor(passedTime / minute)}분 전`;
  }
  return '1분 전';
};

export default processTime;
