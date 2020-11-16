import "./App.css";
import Header from "./components/Header";
import Cards from "./components/Cards";
import SwipeButtons from "./components/buttons";

function App() {
  return (
    // BEM class naming convention
    <div className="app">
      <Header />
      <Cards />
      <SwipeButtons />
    </div>
  );
}

export default App;
