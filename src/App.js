import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Employee from "./Pages/Employee/Employee";
import Calender from "./Pages/Calender/Calender";

function App() {
  return (
      <BrowserRouter>
          <Switch>
              <Route path="/employee"  component={Employee}/>
              <Route path="/" exact component={Calender}/>
          </Switch>
      </BrowserRouter>
  );
}

export default App;
