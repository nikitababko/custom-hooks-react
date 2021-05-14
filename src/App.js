import React from 'react';
import Hover from './components/Hover';

const App = () => {
  return (
    <div>
      <Hover firstColor={'green'} secondColor={'red'} />
      <Hover firstColor={'blue'} secondColor={'orange'} />
    </div>
  );
};

export default App;
