import { useState } from "react";
import KEBAB_SRC from "../../Assets/Icon/iconMore.svg";
import Styles from "../../Styles/FeedCard.module.css";
// import KebabStyles from "../../Styles/Kekbab.module.css";

const AnswerKebab = ({ setFix, number }) => {
  const [list, setList] = useState(false);

  const kebab = () => {
    setList(!list);
  };
  const answerFix = () => {
    setFix({ [number]: true });
  };

  return (
    <>
      <img className={Styles.kebab} src={KEBAB_SRC} onClick={kebab} />
      {/* <div className={list ? KebabStyles.kebabListTrue : KebabStyles.kebabListFalse}> */}
      <p className='삭제하기'>삭제하기</p>
      <p className='수정하기' onClick={answerFix}>
        수정하기
      </p>
      {/* </div> */}
    </>
  );
};
export default AnswerKebab;
