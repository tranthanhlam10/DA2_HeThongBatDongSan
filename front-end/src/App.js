
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './sign/Login/Login'
import Register from './sign/Register/Register'
import UserScreen from './user/UserScreen'
import AdminScreen from './admin/AdminScreen'

export default function App() {

  return (
    <Router>
      <Switch>
        <Route path="/login" ><Login /></Route>
        <Route path="/register" ><Register /></Route>
        <Route path="/admin"><AdminScreen /></Route>
        <Route path="" exact={true} ><UserScreen /></Route>

      </Switch>
    </Router>
  );
}
