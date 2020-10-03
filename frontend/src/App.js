import React from 'react';
import './style/App.css';
import QuizList from './components/QuizList'
import Nav from './components/Nav'
import QuizPage from './components/QuizPage'
import ScorePage from './components/ScorePage'
import CreatePage from './components/CreatePage'
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
      <Route path="/create">
          <CreatePage/>
        </Route>
        <Route path="/quiz/:id">
          <QuizPage/>
        </Route>
        <Route path="/score/:id">
          <ScorePage/>
        </Route>
        <Route path="/">
          <QuizList/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
