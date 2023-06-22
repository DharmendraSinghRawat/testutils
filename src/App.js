import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";




function App() {

  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#153360';
      showAlert("Dark mode has been alert", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been alert", "success");
    }
  }

  return (
    <>

      <Router>

        <Navbar title={"TextUtils"} mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <Routes>
          <Route path="/" exact element={<TextForm showAlert={showAlert} formHeading="Try TextUtils - Word Counter, Character Counter,  Revome Extra Spaces" mode={mode} />} />
          <Route path="/about" exact element={<About mode={mode} />} />
        </Routes>


      </Router>

    </>
  );
}

export default App;
