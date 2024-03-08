import React, { useState } from 'react';

import ARROW_DOWN from '../../Assets/Icon/iconArrowDown.svg';
import ARROW_UP from '../../Assets/Icon/iconArrowUp.svg';
import Styles from '../../Styles/DropDown.module.css';
import { ReactionAPI } from '../../Utils/ReactionAPI';

import DropDownData from './DropDownData';

const DropDownList = () => {
  const [data, setData] = useState([]);
  const [listName, setListName] = useState('최신순');

  const dropData = async (type, list) => {
    try {
      const url = `https://openmind-api.vercel.app/4-14/subjects/?sort=${type}`;
      const DropDownAPI = await ReactionAPI(url, 'GET');
      setData(DropDownAPI.results);
      setListName(list);
      console.log('hi');
    } catch (error) {
      console.error('Error occurred while reacting:', error);
    }
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
            onClick={() => dropData('name', '이름순')}
            style={{ color: listName === '이름순' ? 'var(--blue50)' : 'var(--gray60)' }}>
            이름순
          </p>
          <p
            onClick={() => dropData('time', '최신순')}
            style={{ color: listName === '최신순' ? 'var(--blue50)' : 'var(--gray60)' }}>
            최신순
          </p>
        </div>
      </div>
      <DropDownData data={data} />
    </>
  );
};

export default DropDownList;
