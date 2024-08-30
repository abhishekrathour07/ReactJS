import { useState } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import TextForm from './components/TextForm';
import Alert from './components/Alert';
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
      <Navbar title="TextWorkers" toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        <TextForm heading="Enter the text here" mode={mode} togglealert={togglealert} />
      </div>
    </>
  );
}

export default App;
