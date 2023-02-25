import './App.css';
import Introduction from './components/Introduction';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

const App = () => {


  return (
    <div className='App'>
    
    <Navbar/>
    <Introduction/>
    <Projects />
    <h2>Skills</h2>
    <h2>Contact me </h2>
    </div>
  )  
} 


export default App;
