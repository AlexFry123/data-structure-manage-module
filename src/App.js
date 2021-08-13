import { Switch, Redirect, Route } from 'react-router-dom'
import routes from 'app/domains/allRoutes'
import ROUTE_PATHS from 'domains/allRoutePath'

function App() {
  return (
    <Switch>
      {routes.map((route) => (
        <Route
          exact={route.exact}
          path={route.path}
          component={route.component}
        />
      ))}
      <Redirect from="/" to={ROUTE_PATHS.DASHBOARD} />
    </Switch>
  )
}

export default App
