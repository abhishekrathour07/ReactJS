import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <div className="demo">
        <nav>
          <ul>
            <li>home</li>
            <li>contact</li>
            <li>about</li>
            <li>support</li>
          </ul>


        </nav>
      </div>
      <div className="para">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores blanditiis iusto, sunt consectetur magnam quae tenetur modi illum magni similique ex doloribus nulla saepe laboriosam! Ad distinctio ipsum corporis! Exercitationem, sapiente eius ut commodi eveniet non labore enim earum qui.</p>
        <img src={logo} alt="react logo" height='150px' align='center' />
      </div>
    </>
  );
}

export default App;
