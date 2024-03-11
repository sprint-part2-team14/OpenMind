import { useState } from "react";
import KEBAB_SRC from "../../Assets/Icon/iconMore.svg";
import Styles from "../../Styles/FeedCard.module.css";
import KebabStyles from "../../Styles/Kekbab.module.css";
import { deleteRequest } from "../../Utils/API";

const AnswerKebab = ({ setFix, setAnswerData, setFixData, number, updateFeed }) => {
  const [list, setList] = useState(false);
  // 클릭할때마다 상태가 변해서 list가 보이고, 안보이게 구현
  const kebab = () => {
    setList(!list);
  };
  // 클릭시 (기본false에서) true로 변경
  const answerFix = () => {
    setFix({ [number]: true });
  };
  const answerDelete = () => {
    deleteRequest(`answers/${number}/`);
    setAnswerData({});
    setFixData({});
    updateFeed();
  };
  return (
    <>
      <img className={Styles.kebab} src={KEBAB_SRC} onClick={kebab} />
      <div className={list ? KebabStyles.kebabListTrue : KebabStyles.kebabListFalse}>
        <p className='삭제하기' onClick={answerDelete}>
          삭제하기
        </p>
        <p className='수정하기' onClick={answerFix}>
          수정하기
        </p>
      </div>
    </>
  );
};
export default AnswerKebab;
