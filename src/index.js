// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import { ContextProvider } from './SocketContext';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <ContextProvider>
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   </ContextProvider>
// );


import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { ContextProvider } from './SocketContext';

import './App.css';

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);