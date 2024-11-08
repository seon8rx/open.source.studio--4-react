import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h1>22100110 김성규</h1>
        </p>
        <button className="mybutton">추가된 버튼</button>
      </header>
      <footer className="myfooter">
        <p>오픈소스스튜디오</p>
      </footer>
    </div>
  );
}

export default App;
