import styles from "./Options.module.css";

function Options({ addFeedback, totalFeedback, resetFeedback }) {
  return (
    <div className={styles.optionscont}>
      <button className={styles.btn} onClick={() => addFeedback("good")}>
        Good
      </button>
      <button className={styles.btn} onClick={() => addFeedback("neutral")}>
        Neutral
      </button>
      <button className={styles.btn} onClick={() => addFeedback("bad")}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={styles.btn} onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
}
export default Options;
