import { useState } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
// npm i --to download all modules

function App() {
  const [mode, switchMode] = useState("light");
  const [alert, showAlert] = useState(null);


  const toggleMode = () => {
    if (mode === 'light') {
      switchMode('black');
      document.body.style.backgroundColor = '#042743';
      document.body.style.color = 'white';
      togglealert("Dark mode is enabled", "success ")


    }
    else {
      switchMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      togglealert("Light mode is enable", "success ");
    }
  }

  const togglealert = (massage, type) => {
    showAlert({
      msg: massage,
      type: type
    });

    setTimeout(() => {
      showAlert(null);
    }, 2000);
  }

  return (
    <>
      <Router>
        <Navbar title="TextWorkers" toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route path="/about" element={<About mode={mode} />}>

            </Route>
            <Route path="/" element={<TextForm heading="Enter the text here" mode={mode} togglealert={togglealert} />}>
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
