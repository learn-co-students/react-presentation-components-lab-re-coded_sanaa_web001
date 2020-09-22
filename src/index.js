import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

  let clickHandle = () => console.log('Clicked')

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={clickHandle} />
  </div>,
  document.getElementById('root')
);
