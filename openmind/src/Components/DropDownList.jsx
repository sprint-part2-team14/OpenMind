import React, { useState, useEffect } from "react";

import  ArrowDown  from "../Assets/Icon/iconArrowDown.svg";
import  ArrowUp  from "../Assets/Icon/iconArrowUp.svg";
import Styles from '../Styles/DropDown.module.css';
import { ReactionAPI } from "../Utils/ReactionAPI";

import { DropDownMake } from "./DropDownMake";

const DropDownList = () => {
  const [data, setData] = useState([]);
  const [listName, setListName] = useState('최신순');

  const dropData = async (type, list) => {
    try {
      const url = `https://openmind-api.vercel.app/4-14/subjects/?sort=${type}`;
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
        <img className={Styles.arrowDown} src={ArrowDown}></img>
        <img className={Styles.arrowUp}src={ArrowUp}></img>
        </button>
        <div className={Styles.dropList}>
          <p onClick={() => dropData('name', '이름순')} style={{ color: listName === '이름순' ? 'var(--blue50)' : 'var(--gray60)' }}>이름순</p>
          <p onClick={() => dropData('time', '최신순')} style={{ color: listName === '최신순' ? 'var(--blue50)' : 'var(--gray60)' }}>최신순</p>
        </div>
      </div>
      {DropDownMake(data)}
    </>
  );
};

export default DropDownList;

 