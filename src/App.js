// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
// version 6
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const handleDanger = () => {
    setMode('danger')
    document.body.style.backgroundColor = 'black'
  }
  const handleWarning = () => {
    setMode('warning')
    document.body.style.backgroundColor = 'black'
  }
  const handleSuccess = () => {
    setMode('success')
    document.body.style.backgroundColor = 'black'
  }

  const showAlert = (message) => {
    setAlert({
      msg: message
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);

  }

  const toggle = () => {
    if (mode === 'light' || mode === 'warning') {
      setMode('dark')
      showAlert('Dark Mode Enabled!');
      document.body.style.backgroundColor = 'black'
      document.title = 'TextUtils - Dark'
    }
    else {
      setMode('light')
      showAlert('Light Mode Enabled!');
      document.body.style.backgroundColor = 'white'
      document.title = 'TextUtils - Light'
    }
  }

  return (
    <>

      <Router>
        <Navbar mode={mode} toggle={toggle} handleDanger={handleDanger} handleWarning={handleWarning} handleSuccess={handleSuccess} />
        <Alert alert={alert} />
{/* in version 5 we have to use switch insted of routes */}
{/* exact path helps in exact matching of path because react does partial matching so to avoid bug use exact path */}
        <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} />
        </Routes>

      </Router>
    </>
  );
}

export default App;
