import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//Aquí se indica donde quiero que imprima el componente dentro del html
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
