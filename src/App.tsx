import React from 'react';
import {GlobalStyles} from './globalStyles';
import {Home} from './pages/Home';

export const App: React.FC = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <Home />
    </div>
  );
};
