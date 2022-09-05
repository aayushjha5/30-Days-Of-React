// index.js
import React from 'react'
import ReactDOM from 'react-dom'
//import Demo from './demo'
// import Demo2 from './demo2'
import Demo3 from './demo3'
// To get the root element from the HTML document


//Exercises Level 1
//1. A module is a single or collection of multiple functions  that can be imported /exported and can be included into a project . for ex - math.js contains functions like add,sub, multiply , factorization etc. within it. 

//2. a package is a collection of modules . ex - React ,ReactDOM

//3. see above

//4. Npm is a package manager. it holds different packages in a registry which can be imported easily in a react project.

//5. webpack : it is a module bundler for JS. it takes modules with dependencies and generates static assets representing those modules.

// Webpack goes through your package and creates what it calls a dependency graph which consists of various modules which your webapp would require to function as expected. Then, depending on this graph, it creates a new package which consists of the very bare minimum number of files required, often just a single bundle.js file which can be plugged in to the html file easily and used for the application.

//6. npx create-react-app <my-project-name>

//7.inside a project folder, there are 3 folders namely node_modules, src and public. public folder contains index.html the only html file of the project. along with it, it also contains test files, robots.txt, manifest file. in src folder, the main file is index.js . through this file the whole project is connected to html file. it contains the root element and the elements to be rendered. along with index.js, there are various files such as css files i.e index.css and App.css. App.js is another js file where we can usually write jsx files. in node node_modules folder it contains different folders having different packages that are necesssary for the project.

//8. I usually code in VSCode because of its easy to use UI and variety of extensions.

//9. done

//10. we can do that . by creating a file called math.js and having different function like addition and sub, etc. and we can import it in index.js and use it there.

//Exercise level 2
//q1
//Import and render the following images
//in demo.jsx
//q2
//in demo2.jsx

//Exercise level 3
//demo3.jsx








const app = (
  <div className='app'>
    <Demo3 />
  </div>
)

const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement)