import React from 'react';
import './App.css';
import BrowserRouter from "react-router-dom/BrowserRouter";
import Switch from "react-router-dom/Switch";
import Route from "react-router-dom/Route";
import VendorList from "./components/VendorList"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={VendorList} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
