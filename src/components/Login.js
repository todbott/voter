import { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import { handleLogin } from "../actions/shared";
import { LoadingBar } from "react-redux-loading-bar";



const Login = (props) => {

  useEffect(() => {
    props.dispatch(handleInitialData())
  }, []);

  const login = (user) => {
    console.log('button was clicked')
    props.dispatch(handleLogin(user))
  }

  return (
  <div>
    <LoadingBar />
    {props.loading === true ? null : 
      (
        <div>Hey!
          <button onClick={(e) => login(e.target)}>Login</button>
        </div>
      )
    }
  </div>
  )
};

const mapStateToProps = ({authedUser}) => ({
    loading: authedUser === null,
  })


export default connect(mapStateToProps)(Login);
