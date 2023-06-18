import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';


function App() {
  return (
    <>
    <Navbar title={"TextUtils"} aboutText="About Us" />
    {/* <TextForm formHeading="Enter the text to analyze below" /> */}
    <About />
    
    </>
  );
}

export default App;
