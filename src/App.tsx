import React from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Chat } from "../src/pages/ChatPage";
import { About } from "../src/pages/About";

const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route component={Signup} path='/signup' exact/>
        <Route component={Signin} path='/signin' exact/>
        <Route component={Chat} path='/chat' exact/>
        <Route component={About} path='/about' exact/>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
