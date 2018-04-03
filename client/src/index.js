import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'materialize-css/dist/css/materialize.min.css';

import store from './store';
import App from './components/App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

console.log(`Stripe key is: ${process.env.REACT_APP_STRIPE_KEY}`);
console.log(process.env);
console.log(`Environment is: ${process.env.NODE_ENV}`);
