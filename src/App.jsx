import React from "react";
import { Switch, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import BottomNavBar from "./components/BottomNavBar";
import ImageForm from "./components/Forms/ImageForm";
import { withUser } from "./components/Auth/withUser";

function App(props) {
  const { user } = props.context;
  console.log(user)
  return (
    <div className="App">
      {user && <Header/>}
      <Switch>
        <Route exact path="/" component={WelcomePage} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/auth/signin" component={Signin} />
        <Route exact path="/auth/signup" component={Signup} />
        <Route exact path="/image/:mode(upload|edit)/:id?" component={ImageForm}/>
        <ProtectedRoute exact path="/profile" component={Profile} />
      </Switch>
      {user && <BottomNavBar />}
    </div>
  );
}

export default withUser(App);
