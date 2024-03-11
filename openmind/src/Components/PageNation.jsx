import { useState, useEffect } from 'react';
import Styles from '../Styles/PageNation.module.css';

const Pagenation = ({ totalItems, limit, page, onClick }) => {
  const totalPage = Math.ceil(totalItems / limit);
  const [currentPageArray, setCurrentPageArray] = useState([]);

  useEffect(() => {
    const pages = [];
    for (let i = 1; i <= totalPage; i++) {
      pages.push(i);
    }
    setCurrentPageArray(pages);
  }, [totalPage]);

  return (
    <div className={Styles.buttonBox}>
      <button onClick={() => onClick(page - 1)} disabled={page === 1} className={`${Styles.button} ${Styles.default}`}>
        {'<'}
      </button>
      {currentPageArray.map(pageNumber => (
        <button
          key={pageNumber}
          onClick={() => onClick(pageNumber)}
          className={`${Styles.button} ${page === pageNumber ? Styles.active : Styles.default}`}>
          {pageNumber}
        </button>
      ))}
      <button
        onClick={() => onClick(page + 1)}
        disabled={page === totalPage}
        className={`${Styles.button} ${Styles.default}`}>
        {'>'}
      </button>
    </div>
  );
};

export default Pagenation;
