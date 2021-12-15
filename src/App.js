import logo from './logo.svg';
import './App.css';
import Monster from './Monster'

function App() {
  const monsters = [{monster:"Wolfman", scare:"Silver"}, {monster:"The Thing", scare:"Fire"}, {monster:"Mummy", scare:"Brendan Frasier"}]; // this is like the info you would get from an api i.e Recipe is the object and the keys would be name, ingredients, instructions, image_url.
  const monsterElements = monsters.map((m) => {return <Monster monster={m.monster} scare={m.scare}/>})
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Monster /> */}
        {monsterElements}
        {/* <Monster monster="Wolfman" scare="Silver"/>
        <Monster monster="Ghost" scare="people"/>
        <Monster monster="The Thing" scare="Fire"/>
        <Monster monster="Dracula" scare="Garlic"/>  written in JSX*/}
        {/* {Monster({monster:"Mummy", scare:"Brendan Frasier"})} how it would be in JS*/}
        {/* {new Monster({monster:"Mummy", scare:"Brendan Fraiser"}).render()} Plain JS code -- do not do it this way */}
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
