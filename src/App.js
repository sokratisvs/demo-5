import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomeDataContextProvider } from './store/store';
import Home from "./components/Home/Home";
import Page2 from "./components/Page2/Page2";

const App = () => (
  <main>
    <HomeDataContextProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route path="/page2" component={Page2} />
        </Switch>
      </BrowserRouter>
    </HomeDataContextProvider>
  </main>
)

export default App;