import React from 'react';
import { Route, Switch } from 'react-router-dom'
import LoginForm from './components/LoginForm';
import Addpage from './components/Addpage';
import { Redirect } from 'react-router'
import Mainmenu from './components/Mainmenu';
import Tableapprove from './components/Tableapprove';
import Signup from './components/Signup';
import { Layout } from 'antd';


function App() {
  return (
    
    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
     
      <Switch>
          <Route exact path="/" component={Mainmenu} />
          <Route exact path="/home" component={Mainmenu} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/addpage" component={Addpage} />
          <Route exact path="/addpage" component={Addpage} />
          <Route exact path="/Tableapprove" component={Tableapprove} />
          {/* <Route exact path="/Tableaddpage" component={Tableaddpage} />
           */}
        </Switch>
    </div>

    
  );
}
export default App;
