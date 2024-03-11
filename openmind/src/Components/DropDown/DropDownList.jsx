import React, { useState } from "react";

import ARROW_DOWN from "../../Assets/Icon/iconArrowDown.svg";
import ARROW_UP from "../../Assets/Icon/iconArrowUp.svg";
import Styles from "../../Styles/DropDown.module.css";

const DropDownList = ({ onClick }) => {
  const [listName, setListName] = useState("최신순");

  const handleClick = (sort, name) => {
    setListName(name);
    onClick(sort);
  };

  return (
    <>
      <div className={Styles.dropDown}>
        <button className={Styles.dropBtn}>
          {listName}
          <img className={Styles.arrowDown} src={ARROW_DOWN}></img>
          <img className={Styles.arrowUp} src={ARROW_UP}></img>
        </button>
        <div className={Styles.dropList}>
          <p
            onClick={() => handleClick("name", "이름순")}
            style={{ color: listName === "이름순" ? "var(--blue50)" : "var(--gray60)" }}>
            이름순
          </p>
          <p
            onClick={() => handleClick("time", "최신순")}
            style={{ color: listName === "최신순" ? "var(--blue50)" : "var(--gray60)" }}>
            최신순
          </p>
        </div>
      </div>
    </>
  );
};

export default DropDownList;
