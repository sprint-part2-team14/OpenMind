import { useState, useEffect } from 'react';

// totalItems : 전체 아이템의 수
// limit : 한페이지당 표시할 아이템 수
// page : 현재 선택된 페이지는 나타냄
// setPage : 페이지를 변경할 때 호출되는 이벤트
const Pagenation = ({ totalItems, limit, page, setPage }) => {
  const totalPage = Math.ceil(totalItems / limit);
  const [currentPageArray, setCurrentPageArray] = useState([]);
  const [totalPageArray, setTotalPageArray] = useState([]);

  function sliceArrayByLimit(array, limit) {
    const slicedArray = [];
    for (let i = 0; i < array.length; i += limit) {
      slicedArray.push(array.slice(i, i + limit));
    }
    return slicedArray;
  }

  useEffect(() => {
    if (page % limit === 1) {
      setCurrentPageArray(totalPageArray[Math.floor(page / limit)]);
    } else if (page % limit === 0) {
      setCurrentPageArray(totalPageArray[Math.floor(page / limit) - 1]);
    }
  }, [page]);

  useEffect(() => {
    const slicedPageArray = sliceArrayByLimit(totalPage, limit);
    setTotalPageArray(slicedPageArray);
    setCurrentPageArray(slicedPageArray[0]);
  }, [totalPage]);

  return (
    <div>
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        왼쪽
      </button>
      <div>
        {currentPageArray?.map(i => (
          <button key={i + 1} onClick={() => setPage(i + 1)} aria-current={page === i + 1 ? 'page' : null}>
            {i + 1}
          </button>
        ))}
      </div>
      <button onClick={() => setPage(page + 1)} disabled={page === totalPage}>
        오른쪽
      </button>
    </div>
  );
};

export default Pagenation;
