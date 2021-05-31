import './App.css';
import Home from './pages/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div className="App">
          <Route path="/">
            <Home />
          </Route>
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
