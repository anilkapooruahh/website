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
    </div>
  )  
} 


export default App;
