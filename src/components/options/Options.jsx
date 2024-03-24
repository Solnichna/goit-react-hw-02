import './Options.module.css';

function Options({ updateFeedback, totalFeedback, resetFeedback }) {
    return (
      <div>
        {}
        {totalFeedback > 0 && <button onClick={resetFeedback}>Reset</button>}
        <button onClick={() => updateFeedback('good')}>Good</button>
        <button onClick={() => updateFeedback('neutral')}>Neutral</button>
        <button onClick={() => updateFeedback('bad')}>Bad</button>
      </div>
    );
  }
  

export default Options;