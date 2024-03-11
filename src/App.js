import logo from "./logo.svg";
import "./App.css";
import FirstBtn from "./component/Btn";
import ImageComponent from "./component/ImageComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FirstBtn textBtn="Hi! Don't click me.." />
        <FirstBtn textBtn="Hi! Don't click me.." class={"tiffany"} />
        <ImageComponent src="https://picsum.photos/seed/picsum/200/300/" alt="image picsum" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
