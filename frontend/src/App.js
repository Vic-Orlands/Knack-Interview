import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom"

import Login from "./components/Login/Login"
import Home from "./components/Homepage/Homepage"
import Empl from "./components/Employee_Details/Employee.details"
import Survey from "./components/Survey/Survey"

const App = () => {
    return (
        <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={Login} exact={true} />
                <Route path="/home" component={Home} />
                <Route path="/empl" component={Empl} />
                <Route path="/survey" component={Survey} />
            </Switch>
        </div>
        </BrowserRouter>
    )
}
export default App