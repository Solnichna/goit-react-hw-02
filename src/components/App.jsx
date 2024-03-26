import { useState, useEffect } from "react";
import Options from './options/Options'; 
import Feedback from './feedback/Feedback'; 
import Description from './description/Description'; 
import Notification from './Notification';

import '../components/App.module.css';

function App() {
    const [feedback, setValue] = useState(() => {
      const saveStats = window.localStorage.getItem("stats");
      if (saveStats !== null) {
        return JSON.parse(saveStats);
      } else {
        return { good: 0, neutral: 0, bad: 0 };
      }
    });
  
    useEffect(() => {
      window.localStorage.setItem("stats", JSON.stringify(feedback));
    }, [feedback]);
  
    const updateFeedback = (feedbackType) => {
      if (feedbackType === "reset") {
        setValue({ good: 0, neutral: 0, bad: 0 });
      } else {
        setValue((prevValue) => ({
          ...prevValue,
          [feedbackType]: prevValue[feedbackType] + 1,
        }));
      }
    };
  
    const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
    const totalResult = Math.round((feedback.good / totalFeedback) * 100);
  
    return (
        <div>
            <Description />
            <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} />
            {totalFeedback > 0 ? (
                 <Feedback feedback={feedback} totalFeedback={totalFeedback} totalResult={totalResult} />
            ) : (
                <Notification />
            )}
        </div>
    );
}

export default App;