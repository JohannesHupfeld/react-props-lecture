import logo from './logo.svg';
import './App.css';
import Monster from './Monster'

function App() {
  const monsters = [{monster:"Wolfman", scare:"Silver"}, {monster:"The Thing", scare:"Fire"}];
  const monsterElements = monsters.map((m) => {return <Monster monster={m.monster} scare={m.scare}/>})
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {monsterElements}
        {/* <Monster monster="Wolfman" scare="Silver"/>
        <Monster monster="Ghost" scare="people"/>
        <Monster monster="The Thing" scare="Fire"/>
        <Monster monster="Dracula" scare="Garlic"/> */}
        {new Monster({monster:"Mummy", scare:"Brendan Fraiser"}).render()}
        {/* key: value */}
        {/* key = {value} */}
        <p>
        Hello there!!! 
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
