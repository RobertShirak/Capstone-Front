import React, { Component } from 'react'
import './App.css';
import StartPage from './components/StartPage'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import DinnerView from './components/DinnerView'
import DessertsView from './components/DessertsView'
import NewDinner from './components/NewDinner';
import NewDesserts from './components/NewDesserts';
import UpdateDesserts from './components/UpdateDesserts';
import UpdateDinner from './components/UpdateDinner'

class App extends Component {
  // constructor(props) {
  //   super(props)
  // }
  render() {
    return(
      <div>
        <Router>
          <Route exact path="/"
          component= {StartPage} />
          <Route exact path="/dinner/history"
          component={DinnerView} />
          <Route exact path="/desserts/history"
          component={DessertsView} />
          <Route exact path="/dinner"
          component={NewDinner}/>
          <Route exact path= "/desserts"
          component={NewDesserts}/>
          <Route exact path="/desserts/edit/:id"
          component={UpdateDesserts}/>
          <Route exact path="/dinner/edit/:id"
          component={UpdateDinner}/>
        </Router>
    </div>
  );
}
}
export default App;
