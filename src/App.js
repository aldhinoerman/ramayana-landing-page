import React from 'react';
import './App.css';
import Home from './pages/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Loading } from './components/Loading/Loading';
import ScrollButton from './components/ScrollButton/ScrollButton';

class App extends React.Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    this.isLoading = setTimeout(() => { this.setState({ loading: false }) }, 2300);
  }

  componentWillUnmount() {
    clearTimeout(this.isLoading);
  }

  timer = () => setTimeout(() => {
    this.setState({ loading: false })
  }, 2300);

  render() {
    const { loading } = this.state;
    return (
      <>
        <BrowserRouter>
          <Switch>
            {loading ? (<Loading />) :
              (
                <div className="App">
                  <Route path="/">
                    <Home />
                    <ScrollButton scrollStepInPx='50' delayInMs='16.66' />
                  </Route>
                </div>
              )
            }
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
