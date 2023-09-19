import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Container } from "react-bootstrap";

const Header = (props) => {
    const { current_user } = props;
    return (
        <Container>
        <h3>Welcome {current_user.user}</h3>
        <ButtonGroup aria-label="Basic example">
        <Button variant="primary"><Link to='/home' style={{color: "white"}}>Home</Link></Button>
        <Button variant="primary"><Link to='/leaderboard' style={{color: "white"}}>Leaderboard</Link></Button>
        <Button variant="primary"><Link to='/add' style={{color: "white"}}>Create a poll</Link></Button>
      </ButtonGroup>
      </Container>
    )
}

const mapStateToProps = ({ current_user }) => {
    return {
        current_user
    } 
}

export default connect(mapStateToProps)(Header);