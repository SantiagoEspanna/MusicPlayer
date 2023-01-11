import logo from './logo.svg';
import './App.css';
import Player1 from './components/Player1';
 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className='App-logo' src={process.env.PUBLIC_URL + '/DiscoVinilo.png'} />
         
        <Player1 />

      </header>
    </div>
  );
}

export default App;
