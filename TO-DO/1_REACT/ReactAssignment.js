import React from 'react';
import ReactDOM from 'react-dom';
import Component1 from './Components/Component1';
import Component2 from './Components/Component2';
import Component3 from './Components/Component3';
import Component4 from './Components/Component4';

function render() {
	ReactDOM.render(
	  <React.StrictMode>
		<div class="container">
		  <div class="header"><Component1 /></div>
		  <div class="middle">
			<div class="left-column"><Component2 /></div>
			<div class="right-column"><Component3 /></div>
		  </div>
		  <div class="footer"><Component4 /></div>
		</div>
	  </React.StrictMode>,
	  
	  document.getElementById('root')
	);
}