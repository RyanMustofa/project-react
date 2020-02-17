import React from 'react';
import Login from './component/form-login/login';
import Register from './component/form-register/Register';
import { Route,Switch } from 'react-router-dom';
import Formulir from './component/formulir/Formulir';
import TambahGuru from './component/content/TambahGuru';
import Guru from './component/content/Guru';
import Dashboard from './component/dashboard/Dashboard';

function App() {
  return (
      <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/formulir" component={Formulir} />
          <Route path="/addguru" component={TambahGuru} />
          <Route component={Guru} path="/guru" />
      </Switch>
  );
}

export default App;
