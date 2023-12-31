import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Header = (props) => {

    const loggedInUser = localStorage.getItem("user");
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate("/")
    }
    return (
        <Container style={{ padding: "10px" }}>
            <h3>Welcome {loggedInUser}</h3>
            <ButtonGroup>
                <Button variant="primary"><Link to='/home' style={{ color: "white" }}>Home</Link></Button>
                <Button variant="primary"><Link to='/leaderboard' style={{ color: "white" }}>Leaderboard</Link></Button>
                <Button variant="primary"><Link to='/add' style={{ color: "white" }}>Create a poll</Link></Button>
                <Button variant="warning" onClick={logout}>Logout</Button>
            </ButtonGroup>
        </Container>
    )
}

export default connect()(Header);