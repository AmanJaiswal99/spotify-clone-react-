import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Data} from "./Data"
import reducer,{initialState} from "./reducer"


ReactDOM.render(
  <React.StrictMode>
    <Data initialState={initialState} reducer={reducer}>
    <App />
    </Data>
    </React.StrictMode>,
  document.getElementById('root')
);

