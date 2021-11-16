
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import routes from './routes'
export default function App() {
  const renderRoutes = routes && routes.map((route, index) => {
    return (<Route key={index} path={route.path} exact={route.exact} component={route.main} />);
  });
  return (
    <Router>
      <Switch>
        {renderRoutes}
      </Switch>
    </Router>);
}
