import React from 'react';
import ReactDOM from 'react-dom';
import Component1 from './Components/Component1';
import Component2 from './Components/Component2';
import Component3 from './Components/Component3';
import Component4 from './Components/Component4';


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


export default render;

// const App = () => {
// 	return (
// 	  <div>
// 		<Component1 />
// 		<Component2 />
// 		<Component3 />
// 		<Component4 />
// 	  </div>
// 	);
//   };
  
//   ReactDOM.render(<App />, document.getElementById('root'));
//   This example assumes that your root index.js file is in the same directory as your Components folder. It also assumes that you have exported your components as default exports from their respective files.
  
//   Create an HTML file: You'll need an HTML file to serve as the entry point for your React app. Here's an example:
//   php
//   Copy code
//   <!DOCTYPE html>
//   <html lang="en">
//   <head>
// 	<meta charset="UTF-8">
// 	<title>React App</title>
//   </head>
//   <body>
// 	<div id="root"></div>
// 	<script src="./index.js"></script>
//   </body>
//   </html>
//   This example assumes that your index.js file is in the root directory of your project.
  
//   Once you have all of these pieces in place, you should be able to run your React app by running npm start (assuming you have set up your start script in your package.json file to run your app using a development server like webpack-dev-server).
  
  
  
  
  
  
  