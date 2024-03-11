import Styles from "../../Styles/DeleteButton.module.css";
import { getAnswerQuestion, deleteAnswerQuestion } from "../../Utils/API";

const DeleteButton = ({ id, setCount, children, ...rest }) => {
  const AnswerDeleteButton = async () => {
    const questionApi = await getAnswerQuestion(id);
    const deleteApi = questionApi.results.map(questionIndex => {
      return deleteAnswerQuestion(questionIndex.id);
    });
    await Promise.all(deleteApi); //0까지 돌아가는걸 기다려주고
    setCount((await getAnswerQuestion(id)).count); //새로 만든 api(=delete된데이터)를 가져옴
  };

  return (
    <button className={Styles.deleteButton} onClick={() => AnswerDeleteButton()} {...rest}>
      {children}
    </button>
  );
};

export default DeleteButton;
