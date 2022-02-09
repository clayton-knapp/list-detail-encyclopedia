import './App.css';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import List from './List';
import Detail from './Detail';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path ="/detail/:id">
          <Detail />
        </Route>
        <Route exact path="/:search">
          <List />
        </Route>
        {/* additional home route so it will go to list even if there is no search */}
        <Route exact path="/">
          <List />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
