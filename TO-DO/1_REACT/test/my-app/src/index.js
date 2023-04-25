import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div class="container">
		<div class="header"><Component1 /></div>
		
		<div class="middle">
			<div class="left-column"><Component2 /></div>
			<div class="right-column"><Component3 /></div>
	  	</div>
	  
	  <div class="footer"><Component4 /></div>
	</div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
