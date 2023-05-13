// import logo from './reactjs-logo-icon.png';
import './App.css';
import Navbar from './navbar';
import Body from './body';



function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Hello World from FK.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className='main-container'>
      <Navbar/>
      <Body/>
    </div>
    
  );
}
// function MainContainer(){
//   return (
//       <div>
//           <h1>Hi EveryOne, Welcome to My Youtube Channel</h1>
//       </div>
//   )
// }

// ReactDOM.render(<MainContainer/>, document.getElementById('root'));


export default App;
