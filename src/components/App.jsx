import { useState } from "react";
import Options from './options/Options'; 
import Feedback from './feedback/Feedback'; 
import Description from './description/Description'; 
import Notification from './Notification';

import '../components/App.module.css';

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

    const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
   
    const positiveFeedback = totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) * 100) : 0;

    return (
        <div>
            <Description />
            <Options updateFeedback={updateFeedback} />
            {totalFeedback > 0 ? (
                 <Feedback feedback={feedback} positiveFeedback={positiveFeedback} totalFeedback={totalFeedback} />
            ) : (
                <Notification />
            )}
        </div>
    );
};

export default App;