import React, { Component } from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import routes from "./containers/routes";
import TheFooter from "./containers/TheFooter";
import TheHeader from "./containers/TheHeader";
import TheSidebar from "./containers/TheSidebar";
import "./scss/style.scss";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse">Wait....</div>
  </div>
);
class App extends Component {
  render() {
    return (
      <HashRouter>
        <React.Suspense fallback={loading}>
          <div className="c-app c-default-layout">
            <TheSidebar />
            <div className="c-wrapper">
              <TheHeader />
              <div className="c-body">
                <Switch>
                  {routes.map((route, idx) => {
                    return (
                      route.component && (
                        <Route
                          key={idx}
                          path={route.path}
                          exact={route.exact}
                          name={route.name}
                          render={(props) => (
                            <>
                              <route.component {...props} />
                            </>
                          )}
                        />
                      )
                    );
                  })}
                  <Redirect from="/" to="/dashboard" />
                </Switch>
              </div>
              <TheFooter />
            </div>
          </div>
        </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;
