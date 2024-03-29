import React from 'react';
import './App.scss';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Loading } from './components/Loading';
import ScrollButton from './components/ScrollButton';
import { Other } from './pages/Other';

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
      <Router>
        <Switch>
          <>
            {loading ? (<Loading />) :
              (
                <div>
                  <ScrollButton scrollStepInPx='50' delayInMs='16.66' />
                  <Route exact path="/" component={Home} />
                  <Route path="/other" component={Other} />
                </div>
              )
            }
          </>
        </Switch>
      </Router >
    );
  }
}

export default App;
