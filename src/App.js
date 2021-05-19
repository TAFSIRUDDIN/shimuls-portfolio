import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter,
  BrowserRouter,
  Link
} from "react-router-dom";
import ProjectDetails from './Components/Home/ProjectDetails/ProjectDetails';

function App() {
  
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/projectDetails">
          {/* <Users /> */}
          <ProjectDetails></ProjectDetails>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
  </Router>
  );
}

export default App;
