
import './App.css';
import {Route, Switch} from "react-router-dom";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
