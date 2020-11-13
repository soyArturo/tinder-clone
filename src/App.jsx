import "./App.css";
import Cards from "./components/Cards";
import Header from "./components/Header";

function App() {
  return (
    // BEM class naming convention
    <div className="app">
      <Header />
      <Cards />
      {/* SwipeButtons */}
    </div>
  );
}

export default App;
