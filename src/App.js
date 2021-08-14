import { Switch, Redirect, Route } from 'react-router-dom'
import routes from 'app/domains/allRoutes'
import ROUTE_PATHS from 'app/domains/allRoutePaths'

function App() {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={index}
          exact={route.exact}
          path={route.path}
          component={route.component}
        />
      ))}
      <Redirect from="/" to={ROUTE_PATHS.DATA_STRUCTURE_ALL} />
    </Switch>
  )
}

export default App
