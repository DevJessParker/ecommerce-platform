import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App.js';

// import store from './store/index.js';

// function Entry() {
//   return (
//     <Provider store={store}>
//       <App />
//     </Provider>
//   )
// }

ReactDOM.render(<App />, document.getElementById('root'));