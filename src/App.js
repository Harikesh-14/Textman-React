import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import About from './components/About';
import React, { useState } from 'react'

function App() {
  const [rtext, setRtext] = useState("light");
  const [mode, setMode] = useState("dark");
  const toggleMode = () => {
    if (mode === 'light') {
      setMode("dark");
      setRtext("light");
      showAlert("success", "Switched to Light Mode");
      document.body.style.backgroundColor = '#fff';

    } else {
      setMode("light");
      setRtext("dark");
      showAlert("success", "Switched to Dark Mode");
      document.body.style.backgroundColor = '#202020';
    }
  }

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  return (
    <>
      <Navbar title='Textman' about='About Us' mode={mode} toggleMode={toggleMode} rtext={rtext} />
      <Alert alert={alert} />
      <Textform showAlert={showAlert} mode={mode} rtext={rtext} />

    </>
  );
}

export default App;
