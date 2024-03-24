import './Feedback.module.css';

const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => (
	<div>
		<p>Good:{feedback.good}</p>
		<p>Neutral:{feedback.neutral}</p>
		<p>Bad:{feedback.bad}</p>
		<p>TotalFeedback:{totalFeedback}</p> {}
		<p>PositiveFeedback:{positiveFeedback}</p>
	</div>
);

export default Feedback;