import './App.css';
import {Route, Switch} from "react-router-dom";
import Home from "./pages/home/Home";
import ObjectInfo from "./pages/objectinfo/ObjectInfo";
import Redirect from "react-router-dom/es/Redirect";
import Profile from "./pages/profile/Profile";
import SignIn from "./pages/signin/SignIn";
import SignUp from "./pages/signup/SignUp";
import {useContext} from "react";
import {AuthContext} from "./context/AuthContext";


function App() {

    const { auth } = useContext(AuthContext)

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
            {auth? <Home /> : <Redirect to="/signIn"/>}
        </Route>
          <Route path="/objectinfo/:id">
              {auth? <ObjectInfo/> : <Redirect to="/signIn"/>}
          </Route>
              <Route path="/profile">
                  {auth? <Profile /> : <Redirect to="/signIn"/>}
              </Route>
              <Route exact path="/signin">
                  <SignIn />
              </Route>
              <Route exact path="/signup">
                  <SignUp />
              </Route>
      </Switch>
    </div>
  );
}

export default App;
