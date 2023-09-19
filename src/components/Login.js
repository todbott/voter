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
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css'



const Login = (props) => {

  const [loggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate();

  const Screen = () => {
    return (
      <DropdownButton title="login" onSelect={(e) => login(e)}>
          <Dropdown.Item eventKey="sarahedo">Sarah Edo</Dropdown.Item>
          <Dropdown.Item eventKey="mtsamis">Mike Tsamis</Dropdown.Item>
          <Dropdown.Item eventKey="tylermcginnis">Tyler McGinnis</Dropdown.Item>
          <Dropdown.Item eventKey="zoshikanlu">Zenobia Oshikanlu</Dropdown.Item>
      </DropdownButton>
    );
  }

  useEffect(() => {
    props.dispatch(handleInitialData())
  }, [props]);

  const login = (user) => {
    props.dispatch(handleLogin({user}));
    setLoggedIn(true)
    navigate("/home")
  }

  return (
      <Container fluid style={{ paddingTop: 10 }}>
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
              
          
        
        

      </Container>


  )
};


export default connect()(Login);//mapStateToProps)(Login);
