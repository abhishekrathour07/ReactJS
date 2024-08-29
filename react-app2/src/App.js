import './App.css';
import Navbar from "./components/Navbar";
import TextForm from './components/TextForm';
// npm i --to download all modules

function App() {
  return (
    <>
      <Navbar title="TextWorkers" About='About' />
      <div className="container">
        <TextForm heading="Enter the text here" />
      </div>
    </>
  );
}

export default App;
