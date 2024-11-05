import Description from './Description/Description';
import Options from './Options/Options';
import Feedback from './Feedback/Feedback';
import Notification from './Notification/Notification';

import { useState, useEffect } from 'react';

function App() {
  const firstState = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  const [state, setState] = useState(() => {
    const savedState = window.localStorage.getItem('key-state');
    if (savedState !== null) {
      return JSON.parse(savedState);
    }
    return firstState;
  });

  //=========замінити for of на ?????===
  //загальна кількість відгуків
  let totalFeedback = 0;
  const values = Object.values(state);
  for (const value of values) {
    totalFeedback += value;
  }
  //=================

  //-- % positive feedback; ().toFixed(0) - округлює до цілого числа
  const positiveFeedback = () => {
    const persentPositivFeedback = ((state.good / totalFeedback) * 100).toFixed(
      0
    );

    return persentPositivFeedback;
  };

  //-- рахує відгуки по типу(good, bad, ...)
  const updateFeedback = feedbackType => {
    //розпиляє попередній об'єкт(prev), і замінює "прийшовшому" типу([feedbackType] - ключ) значення(prev[feedbackType] + 1 )
    setState(prev => ({ ...prev, [feedbackType]: prev[feedbackType] + 1 }));
  };

  //-- обнуляє відгуки
  const onClickReset = () => {
    console.log('Reset Feedback');

    setState(prev => ({ ...prev, ...firstState })); //1 варіан
    //setState(prev => ({ ...prev, good: 0, neutral: 0, bad: 0 })); //2 варіант
    //setState(prev => Object.keys(prev).map(item => (prev[item] = 0))); //3 варіант ???? як добратися до значення???
  };

  useEffect(() => {
    //складні типами(об'єкт, масив) перетворюємо збережене значення у рядок за допомогою JSON.stringify
    window.localStorage.setItem('key-state', JSON.stringify(state));
  }, [state]);

  return (
    <div>
      <Description title="Sip Happens Café" />
      <Options
        feedback={state}
        totalFeedback={totalFeedback}
        onClickFeedback={updateFeedback}
        onClickReset={onClickReset}
      />
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback
          feedback={state}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )}
    </div>
  );
}

export default App;
