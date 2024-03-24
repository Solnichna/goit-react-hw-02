import { useState } from "react";
import Options from './options/Options'; 
import Feedback from './feedback/Feedback'; 
import Description from './description/Description'; 
import Notification from './Notification';

import "./App.css";

const App = () => {
	const [feedback, setFeedback] = useState({
		good: 0,
		neutral: 0,
		bad: 0,
	});

		const updateFeedback = (feedbackType) => {
		if (feedbackType === 'reset') {
			setFeedback({ good: 0, neutral: 0, bad: 0 });
		} else {
			setFeedback({
				...feedback,
				[feedbackType]: feedback[feedbackType] + 1,
			});
		}
	};
	const totalFeedback = feedback.good + feedback.neutral + feedback.bad; // Крок #3 вычислен. общее кол-во отзывов
	const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100); // Крок #5 подсчет % отзывов
	return (
		<div>
			<Description />
			<Options updateFeedback={updateFeedback} />
			{}
			{totalFeedback > 0 ? (
				<Feedback feedback={feedback} />
			) : (
				<Notification />
			)}
		</div>
	);
};

export default App;