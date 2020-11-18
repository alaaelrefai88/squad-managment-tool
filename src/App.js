import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/globalStyles.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import {GlobalProvider} from "./context/GlobalState";

import TeamInfo from './components/TeamInfo';
import MyTeams from './components/MyTeams';

function App() {
  return (
    <GlobalProvider>
       <Router>
        <Switch>
          <Route path="/" exact component={MyTeams}/>
          <Route path="/createTeam" exact component={TeamInfo}/>
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
