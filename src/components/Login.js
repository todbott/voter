import { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import { handleLogin } from "../actions/shared";
import { LoadingBar } from "react-redux-loading-bar";
import { Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from "./Home";


const Login = (props) => {

  useEffect(() => {
    props.dispatch(handleInitialData())
  }, [props]);

  const login = (user) => {
    console.log('button was clicked')
    user = "me"
    props.dispatch(handleLogin({user}))
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact path="/"
          element={
            
            props.loading === true ? <LoadingBar /> : 
              (     
            <div>Hey!
              <button onClick={(e) => login(e.target)}>Login</button>
            </div>
              )
          }
        />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
};



// const mapStateToProps = ({authedUser}) => ({
//     loading: authedUser === null,
//   })


export default connect()(Login);//mapStateToProps)(Login);
