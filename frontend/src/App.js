import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import Addpage from './components/Addpage';
// import { register } from './serviceWorker';
import Register from './components/Register';
import Mainmenu from './components/Mainmenu';

function App() {
  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
     
      {/* <Addpage/> */}
     <Mainmenu/>
      {/* <Register/> */}
       {/* <LoginForm/> */}
      {/* <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/changepassword" component={ChangePassword} />
          <Redirect to="/login" />
        </Switch> */}
    </div>
  );
}

export default App;
