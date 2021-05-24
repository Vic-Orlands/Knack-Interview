import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"

import Login from "./components/Login/Login"
import Home from "./components/Homepage/Homepage"
import Survey from "./components/Survey/Survey"

const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={(props) =>
			localStorage.getItem('loggedIn') ? (
				<Component {...props} />
			) : (
				<Redirect to={{ pathname: '/', state: { from: props.location } }} />
			)}
	/>
);

const App = () => {
    return (
        <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={Login} exact={true} />
                <Route path="/home" component={Home} />
                <Route path="/survey" component={Survey} />
            </Switch>
        </div>
        </BrowserRouter>
    )
}
export default App