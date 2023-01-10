import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1 className="App-tittle display-1">Music Player</h1>
          <div className="container">
              <div className="row">
                <h2 className="display-6">Listen to your local music</h2>
              </div>
              <div className="row">
                <div className= "col-sm">
                  <img src={process.env.PUBLIC_URL + "/pant1.png"} alt="image" />
                  <img src={process.env.PUBLIC_URL + "/pant2.png"} alt="image" />
                  </div>
              </div>
              <div className="row">
                <div className= "col-sm">
                  <button type="button" className="btn btn-light">Click to Listen!</button>
                </div>
              </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
