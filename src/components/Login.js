import { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import { handleLogin } from "../actions/shared";
import { LoadingBar } from "react-redux-loading-bar";
import { Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from "./Home";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "./Header";
import LeaderBoard from './LeaderBoard';
import NewPollCard from './NewPollCard';
import PollCard from './PollCard';




const Login = (props) => {

  const [loggedIn, setLoggedIn] = useState(false);

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
    setLoggedIn(true)
    navigate("/home")
  }

  return (
      <div>
        {
          props.loading === true ? <LoadingBar /> : (
            loggedIn && (<Header />)
        )}
            
            <Routes>
                <Route
                  exact path="/"
                  element={<Screen />}
                />
                <Route path="/home" element={<Home />} />
                <Route path="/leaderboard" element={<LeaderBoard />} />
                <Route path="/add" element={<NewPollCard />} />
                <Route path="/home/questions/:question_id" element={<PollCard />} />
              </Routes>
              
          
        
        

      </div>


  )
};


export default connect()(Login);//mapStateToProps)(Login);
