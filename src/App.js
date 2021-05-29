import React from 'react'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import usersReducer from './store/reducer/user'
import Users from './pages/users'
import Home from './pages/home'

function App() {
  const store = createStore(usersReducer)
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path='/users' component={Users} />
          <Route path='/' component={Home} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
