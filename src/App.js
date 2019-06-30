import React from 'react';
import './App.css';
import './styles/app.scss';
import Header from "./components/Header";
import PlanesList from "./components/PlanesList";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
      <Router>
          <div className="app">
              <Header />
              <PlanesList/>
          </div>
      </Router>
  );
}

export default App;
