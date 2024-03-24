import './Feedback.module.css';

const Feedback ({ feedbackTypes, totalFeedback, positivePercentage }) => {
    return (
      <div>
        <h2>Feedback Statistics</h2>
        <p>Total Feedback: {totalFeedback}</p>
        <p>Positive Feedback Percentage: {positivePercentage}%</p>
        <p>Good: {feedbackTypes.good}</p>
        <p>Neutral: {feedbackTypes.neutral}</p>
        <p>Bad: {feedbackTypes.bad}</p>
      </div>
    );
  }

export default Feedback;