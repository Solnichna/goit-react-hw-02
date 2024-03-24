import { useState } from "react";
import Options from './options/Options'; 
import Feedback from './feedback/Feedback'; 
import Description from './description/Description'; 
import Notification from './Notification';

import "./App.css";

function App() {
  // Ініціалізація стану з локального сховища або нульовим значенням, якщо нічого не збережено
  const initialFeedbackTypes = JSON.parse(localStorage.getItem('feedbackTypes')) || {
    good: 0,
    neutral: 0,
    bad: 0
  };

  const [feedbackTypes, setFeedbackTypes] = useState(initialFeedbackTypes);

  // Функція для оновлення стану зворотнього зв'язку та збереження його у локальному сховищі
  const updateFeedback = feedbackType => {
    setFeedbackTypes(prevState => {
      const newState = {
        ...prevState,
        [feedbackType]: prevState[feedbackType] + 1
      };
      localStorage.setItem('feedbackTypes', JSON.stringify(newState));
      return newState;
    });
  };

  // Обчислення загальної кількості відгуків
  const totalFeedback = feedbackTypes.good + feedbackTypes.neutral + feedbackTypes.bad;

  // Обчислення відсотка позитивних відгуків
  const positivePercentage = totalFeedback > 0 ? Math.round((feedbackTypes.good / totalFeedback) * 100) : 0;

  // Ефект для збереження стану у локальному сховищі при зміні стану
  useEffect(() => {
    localStorage.setItem('feedbackTypes', JSON.stringify(feedbackTypes));
  }, [feedbackTypes]);

  return (
    <div>
      <Options 
        updateFeedback={updateFeedback} 
        totalFeedback={totalFeedback} 
      />
      {/* Умовний рендеринг компоненту Feedback */}
      {totalFeedback > 0 && 
        <Feedback 
          feedbackTypes={feedbackTypes} 
          totalFeedback={totalFeedback} 
          positivePercentage={positivePercentage} 
        />
      }
      {/* Умовний рендеринг компоненту Notification */}
      {totalFeedback === 0 && <Notification />}
    </div>
  );
}

export default App;