import './App.css';
import { Hello, World } from './HelloWorld';
import Items from './items'

function App() {

  return (
    <div className="App">
      <Hello />
      <World />
      <div>
        <Items />
      </div>
    </div>
  );
}

export default App;
