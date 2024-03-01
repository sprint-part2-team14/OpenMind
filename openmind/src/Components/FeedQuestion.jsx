import styles from "../Styles/FeedQuestion.module.css"

const FeedQuestion = ({ type, createdAt, children } ) => {
  return (
    <div className={styles.questionArea}>
      <div className={styles.infoGroup}>
        {type} · {createdAt}
      </div>
      <div className={styles.question}>
        {children}
      </div>
    </div>
  )
}

export default FeedQuestion;