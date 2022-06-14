import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { GetRoutes, RoutePaths } from './routes'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        {GetRoutes.map((route, index) => ( <Route key={index} {...route} /> ))}
      </Switch>
      <Redirect to={RoutePaths.home} />
    </BrowserRouter>
  )
}

export default App
