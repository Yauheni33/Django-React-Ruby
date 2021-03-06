import React from "react";
import routes from "../components/Routes.jsx"
import { Route, Switch, withRouter } from 'react-router-dom'
import Home from '../components/Home'
import Error404 from '../components/Error404'

function RouteWithSubRoutes(route) {
    return (
        <Route
        path={route.path}
        render={props => (
            <route.component {...props} routes={route.routes} />
        )}
        />
    );
}

function Container({ location }) {
        return(
            <Switch location={location}>
                <Route exact path="/" component={Home} />
                {routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route} />
                ))}
                <Route component={Error404}/>
            </Switch>
        );
}

export default withRouter(Container);