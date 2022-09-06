// index.js
import React from 'react'
import ReactDOM from 'react-dom/client'
// import asabeneh  from './images/asabeneh.jpg'

// // Header Component
// const Header = () => (
//   <header>
//     <div className='header-wrapper'>
//       <h1>Welcome to 30 Days Of React</h1>
//       <h2>Getting Started React</h2>
//       <h3>JavaScript Library</h3>
//       <p>Aayush Jha</p>
//       <small>Sept 3, 2022</small>
//     </div>
//   </header>
// )

// const UserCard = ()=>{
//   <div className="user-card">
//     <img src={asabeneh} alt="" />
//     <h2>Asabeneh Yetayeh</h2>
//   </div>
// }

// const TechList = ()=>{
//   const techs = ['HTML', 'CSS', 'JavaScript'];
//   const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>);
//   return techsFormatted;
// }

// const Main = ()=>(
//   <main>
//     <div className="main-wrapper">
//       <p>Prerequisite to get started react.js</p>
//       <ul>
//         <TechList />
//       </ul>
//       <UserCard />
//     </div>
//   </main>
// )

// const Footer = () =>(
//   <footer>
//     <div className="footer-wrapper">
//       <p>Copyright @ 2022</p>
//     </div>
//   </footer>
// )

// const App = ()=>(
//   <div className="app">
//     <Header />
//     <Main />
//     <Footer />
//   </div>
// )

// //RANDOM BACKGROUND COLOR CHANGE ON REFRESH
// const hexaColor = ()=>{
//   let str = '0123456789abcdef';
//   let color = '';
//   for (let i = 0; i < 6; i++) {
//     let index = Math.floor(Math.random() * str.length);
//     color += str[index];
//   }
//   document.body.style.background = '#' + color ;
//   return '#' + color ;
// }

// const HexaColor = () => 
// <div>{hexaColor()}</div>

// const root = ReactDOM.createRoot(document.getElementById('root'));
// // we render the JSX element using the ReactDOM package
// root.render(<HexaColor />)

// //exercise answer
// const hexaColor = () => {
//   let str = '0123456789abcdef';
//   let color = '';
//   for (let i = 0; i < 6; i++) {
//     let index = Math.floor(Math.random() * str.length);
//     color += str[index];
//   }
//   // document.body.style.background = '#' + color ;
//   return '#' + color;
// }

// const Button = () => (
//   <button style={{
//     backgroundColor: hexaColor(),
//       width: '100%',
//       height: '3rem',
//       border: 'none',
//       color: 'white',
//       borderRadius: '1rem',
//       cursor: 'pointer',
//       marginBottom: '1rem' 
//   }}>
//     Color Code is {hexaColor().split('#')}
//   </button>
// )

// const Main = () => (
//   <div className="container" style={{
//     display: 'flex',
//     flexDirection: 'column',
//   }}>
//     <Button />
//     <Button />
//     <Button />
//     <Button />
//     <Button />
//     <Button />
//     <Button />
//     <Button />
//   </div>
// )

// const root = ReactDOM.createRoot(document.getElementById('root'));
// // we render the JSX element using the ReactDOM package
// root.render(<Main />)



