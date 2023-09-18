import { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import { handleLogin } from "../actions/shared";
import { LoadingBar } from "react-redux-loading-bar";
import { Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from "./Home";
import { useNavigate } from "react-router-dom";




const Login = (props) => {

  const navigate = useNavigate();

  const Screen = () => {
    return (
      <div>Hey!
        <button onClick={(e) => login(e.target)}>Login</button>
      </div>
    )
  }

  useEffect(() => {
    props.dispatch(handleInitialData())
  }, [props]);

  const login = (user) => {
    console.log('button was clicked')
    user = "sarahedo"
    props.dispatch(handleLogin({user}));
    navigate("/home")
  }

  return (
    
      <Routes>
        <Route
          exact path="/"
          element={props.loading === true ? <LoadingBar /> : <Screen />}
        />
        <Route path="/home" element={<Home />} />
      </Routes>

  )
};


export default connect()(Login);//mapStateToProps)(Login);
