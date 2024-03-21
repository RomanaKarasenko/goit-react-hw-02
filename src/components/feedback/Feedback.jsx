import styles from "./Feedback.module.css";

function Feedback({ good, neutral, bad, total }) {
  const positivePercentage =
    total > 0 ? Math.round(((good + neutral) / total) * 100) : 0;

  return (
    <ul className={styles.itemsStyle}>
      <li>
        <p>Good: {good}</p>
      </li>
      <li>
        <p>Neutral: {neutral}</p>
      </li>
      <li>
        <p>Bad: {bad}</p>
      </li>
      <li>
        <p>Total: {total}</p>
      </li>
      <li>
        <p>Positive: {positivePercentage}%</p>
      </li>
    </ul>
  );
}

export default Feedback;
