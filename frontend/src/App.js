import React from 'react';
import './style/App.css';
import QuizList from './components/QuizList'
import Nav from './components/Nav'
import QuizPage from './components/QuizPage'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {

  return (
    <Router>
      <Nav/>
      <Switch>
        <Route path="/">
          <QuizList/>
        </Route>
        <Route path="/quiz/:id">
          <QuizPage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
