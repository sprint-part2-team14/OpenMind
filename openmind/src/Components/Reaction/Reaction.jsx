import { QuestionReaction } from './QuestionReaction';

const Reaction = ({ id }) => {
  return (
    <>
      <div>
        <QuestionReaction id={id} type="like" />
        <QuestionReaction id={id} type="dislike" />
      </div>
    </>
  );
};

export default Reaction;
