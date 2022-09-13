import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {Auth0Provider} from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENTID;
  

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider domain={domain} clientId={clientId} redirectUri={window.location.origin} >
        <App />
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
