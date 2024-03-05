import React, { useState} from "react";

import  ARROWDOWN  from "../Assets/Icon/iconArrowDown.svg";
import  ARROWUP  from "../Assets/Icon/iconArrowUp.svg";
import Styles from '../Styles/DropDown.module.css';
import { ReactionAPI } from "../Utils/ReactionAPI";

import { DropDownMakeData } from "./DropDownMakeData";

const DropDownList = () => {
  const [data, setData] = useState([]);
  const [listName, setListName] = useState('최신순');

  const dropData = async (type, changeurl, list) => {
    try {
      const url = `${changeurl}?sort=${type}`;
      const DropDownAPI = await ReactionAPI(url, "GET");
      setData(DropDownAPI.results);
      setListName(list)
    } catch (error) {
      console.error("Error occurred while reacting:", error);
    }
  };

  return (
    <>
      <div className={Styles.dropDown}>
        <button className={Styles.dropBtn}>{listName}
        <img className={Styles.arrowDown} src={ARROWDOWN}></img>
        <img className={Styles.arrowUp}src={ARROWUP}></img>
        </button>
        <div className={Styles.dropList}>
          <p onClick={() => dropData('name', '이름순')} style={{ color: listName === '이름순' ? 'var(--blue50)' : 'var(--gray60)' }}>이름순</p>
          <p onClick={() => dropData('time', '최신순')} style={{ color: listName === '최신순' ? 'var(--blue50)' : 'var(--gray60)' }}>최신순</p>
        </div>
      </div>
      {DropDownMakeData(data)}
    </>
  );
};

export default DropDownList;
