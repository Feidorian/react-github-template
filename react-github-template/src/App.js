import './App.css';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import paths from './paths';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path='/'>
          {/* Home page goes here  */}
        </Route>
        <Route>
          <Redirect to='' />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
