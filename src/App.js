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
          {/* Detail Component Here */}
          <Detail />
        </Route>
        <Route exact path="/">
          {/* List Home Page Component Here */}
          <List />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
