import React from 'react';
import './styles/app.scss';
import Header from "./components/Header";
import PlanesList from "./components/PlanesList";
import {BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
      <Router>
          <div className="app">
              <Header />
              <Route exact path="/" render={() => {return <PlanesList event="arrival"/>}} />
              <Route exact path="/departure" render={() => {return <PlanesList event="departure"/>}} />
          </div>
      </Router>
  );
}

export default App;
