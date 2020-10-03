import React, { useState } from 'react';
import './App.css';
import CircleJs from "./components/CircleJs";
import CircleCss from "./components/CircleCss";
import cn from 'classnames';

import './App.css';

function App() {
  const [isCss, setIsCss] = useState(false);
  const [isJs, setIsJs] = useState(false);

  const handleCssClick = () => (setIsCss(!isCss));
  const handleJsClick = () => (setIsJs(!isJs));

  return (
    <div className="App">
      <div className="button-wrapper">
        <button onClick={handleCssClick} className={cn({ active: isCss })}>
          {isCss ? 'Выключить' : 'Включить'} css анимацию
        </button>
      </div>
      {isCss && <CircleCss />}
      <div className="button-wrapper">
        <button onClick={handleJsClick} className={cn({ active: isJs })}>
          {isJs ? 'Выключить' : 'Включить'} js анимацию
        </button>
      </div>
      {isJs && <CircleJs />}
    </div>
  );
}

export default App;
