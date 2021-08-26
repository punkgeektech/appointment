import Register from './Register';
import Admin from './Admin';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
	<Route path="/admin">
	  <Admin />
	</Route>
	<Route path="/">
          <Register />
	</Route>
      </Switch>
    </Router>
  );
}

export default App;
