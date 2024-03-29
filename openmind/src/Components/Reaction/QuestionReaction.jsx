import { useState } from 'react';
import { ReactComponent as ThumbsDown } from '../../Assets/Icon/iconThumbsDown.svg';
import { ReactComponent as ThumbsUp } from '../../Assets/Icon/iconThumbsUp.svg';
import Styles from '../../Styles/Reaction.module.css';
import { postReaction } from '../../Utils/API';

export function QuestionReaction({ type, id }) {
  const [like, setLike] = useState(null);
  const [dislike, setDislike] = useState(null);
  const questionId = id;

  const handleReaction = async () => {
    try {
      const reaction = await postReaction(questionId, { type: type });
      if (type === 'like') {
        setLike(reaction.like);
      } else {
        setDislike(reaction.dislike);
      }
    } catch (error) {
      console.error('Error occurred while reacting:', error);
    }
  };

  const stop = () => {};

  return (
    <div className={Styles.container}>
      {type === 'like' && (
        <div
          className={like ? Styles.clickLikeReaction : Styles.likeReaction}
          onClick={like ? stop : () => handleReaction()}>
          <ThumbsUp fill={like ? 'var(--blue50)' : 'var(--gray40)'} />
          <p>좋아요</p>
          <p>{like}</p>
        </div>
      )}
      {type === 'dislike' && (
        <div
          className={dislike ? Styles.clickDislikeReaction : Styles.likeReaction}
          onClick={dislike ? stop : () => handleReaction()}>
          <ThumbsDown fill={dislike ? 'var(--gray60)' : 'var(--gray40)'} />
          <p>싫어요</p>
          <p>{dislike}</p>
        </div>
      )}
    </div>
  );
}
