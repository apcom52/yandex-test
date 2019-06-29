import React from 'react';
import './App.css';
import './styles/app.scss';
import Header from "./components/Header";
import PlanesList from "./components/PlanesList";

function App() {
  return (
      <div className="app">
          <Header />
          <PlanesList/>
      </div>
  );
}

export default App;
