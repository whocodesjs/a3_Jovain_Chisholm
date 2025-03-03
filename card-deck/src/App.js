import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Card Deck</h1>
      <div className="controls">
        <button onClick={() => dealCards(5)}>Deal 5</button>
        <button onClick={() => dealCards(7)}>Deal 7</button>
        <button onClick={reset}>Reset</button>
        <button onClick={tossCard} disabled={pickedCardIndex === null}>
          Toss
        </button>
        <button onClick={addWildCard}>Wildcard</button>
        <button onClick={regroup}>Regroup</button>
      </div>
    </div>
  );
}

export default App;
