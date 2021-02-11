import React from 'react';
import {  BrowserRouter as Router, Route } from 'react-router-dom'
import Formulario from './components/formulario.jsx';
import Lista from './components/lista.jsx';

function App() {
  return (
      <Router>
        <Route path="" exact>
          <Formulario/>
        </Route>

        <Route path="/List" >
        <Lista/> 
        </Route>
      
      </Router>
  );
}

export default App;
