/* eslint-disable no-mixed-spaces-and-tabs */
import './Options.module.css';

/* const Options = ({ updateFeedback, totalFeedback  }) => (
	<div>
		<button onClick={() => updateFeedback('good')}>Good</button>
		<button onClick={() => updateFeedback('neutral')}>Neutral</button>
		<button onClick={() => updateFeedback('bad')}>Bad</button>
		{totalFeedback > 0 && (
			<button onClick={() => updateFeedback('reset')}>Reset</button>
		)}
	</div>
);*/
const Options = ({ updateFeedback, totalFeedback }) => {
	if (totalFeedback > 0) {
	  return (
		<div>
		  <button onClick={() => updateFeedback("good")}>Good</button>
		  <button onClick={() => updateFeedback("neutral")}>Neutral</button>
		  <button onClick={() => updateFeedback("bad")}> Bad</button>
		  <button onClick={() => updateFeedback("reset")}>Reset</button>
		</div>
	  );
	} else {
	  return (
		<div>
		  <button onClick={() => updateFeedback("good")}>Good</button>
		  <button onClick={() => updateFeedback("neutral")}>Neutral</button>
		  <button onClick={() => updateFeedback("bad")}>Bad</button>
		</div>
	  );
	}
  };

export default Options;