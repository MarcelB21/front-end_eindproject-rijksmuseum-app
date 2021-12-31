
import './App.css';
import {Route, Switch} from "react-router-dom";
import Home from "./pages/home/Home";
import ObjectInfo from "./pages/objectinfo/ObjectInfo";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

          <Route path="/objectinfo/:id">
              <ObjectInfo/>
          </Route>
      </Switch>
    </div>
  );
}

export default App;
