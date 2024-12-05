import './App.css';
import Hero from './screens/Hero/Hero';

import '@fontsource/roboto-condensed/400.css';
import '@fontsource/roboto-condensed/600.css';
import '@fontsource/roboto-condensed/700.css';
import '@fontsource/roboto-condensed/900.css';
import '@fontsource/roboto/100.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { useState } from 'react';
import About from './screens/About/About';
import Experience from './screens/Experience/Experience';
import Projects from './screens/Projects/Projects';

function App() {
  const [view, setView] = useState(1);

  const handleClick = (where: number) => {
    setView(where);
  };

  const getView = () => {
    if (view === 1) {
      return <Hero handleClick={handleClick} />;
    }
    if (view === 2) {
      return <About handleClick={handleClick} />;
    }
    if (view === 3) {
      return <Experience handleClick={handleClick} />;
    }

    if (view === 4) {
      return <Projects />;
    }
  };

  const goBack = () => {
    if (view > 1) {
      setView((prevVal) => prevVal - 1);
    }
  };

  return (
    <div className="root">
      {view > 1 && (
        <button onClick={goBack} className="back">
          back
        </button>
      )}
      {getView()}
    </div>
  );
}

export default App;
