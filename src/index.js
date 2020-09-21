import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={undefined} />
        <SimplerComponent handleClick={console.log(Clicked!)} />
  </div>,
  document.getElementById('root')
);
