import Styles from '../Styles/PageNation.module.css';

const Pagination = ({ totalItems, limit, page, setPage }) => {
  const totalPage = Math.ceil(totalItems / limit);
  const [currentPageArray, setCurrentPageArray] = useState([]);
  const [totalPageArray, setTotalPageArray] = useState([]);

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
      <Button onClick={() => setPage(page - 1)} disabled={page === 1}>왼쪽</Button>
      <div>
        {currentPageArray?.map((i) => (
          <Button
            key={i + 1}
            onClick={() => setPage(i + 1)}
            aria-current={page === i + 1 ? 'page' : null}
          >
            {i + 1}
          </Button>
        ))}
      </div>
      <Button
        onClick={() => setPage(page + 1)}
        disabled={page === totalPage}
      >오른쪽</Button>
    </div>
  );
};

export default Pagination;