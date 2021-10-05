import './App.css';
import Data from "./Components/Back/Data";
import Header from './Components/Front/Header/Header';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './Components/Front/Routes/Routes';


const App = () => {

  const {productItems} = Data;

  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes productItems={productItems}/>
      </Router>
    </div>
  );
}

export default App;
