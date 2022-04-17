
import './App.css';
import Header from './Components/Header/Header';
import Pricing from './Components/Pricing/Pricing';

function App() {
  return (
    <div className="App">
       <Header></Header>
      <h1 className="text-6xl font-bold underline">Welcome to my Pricing club</h1>
     <Pricing></Pricing>
    </div>
  );
}

export default App;
