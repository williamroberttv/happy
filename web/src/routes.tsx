import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Landing from './pages/Landing'
import OrphanagesMap from './pages/OrphanagesMap'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Landing} path="/" exact/>
        <Route component={OrphanagesMap} path="/app"/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
