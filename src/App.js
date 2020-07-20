import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Employee from "./Pages/Employee/Employee";
import Calender from "./Pages/Calender/Calender";
import {Provider} from "react-redux";
import store from "./redux/store";

function App() {
  return (
      <Provider store={store}>
          <BrowserRouter>
              <Switch>
                  {/*<Route path="/employee"  component={Employee}/>*/}
                  <Route path="/employee" exact component={Employee}/>
              </Switch>
          </BrowserRouter>

      </Provider>

  );
}

export default App;
