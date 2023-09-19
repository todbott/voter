import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Header = (props) => {
    const { current_user } = props;
    console.log(current_user)
    return (
        <div>
            header -- welcome {current_user.user}
            <Link to='/home'>Home</Link>
            <Link to='/leaderboard'>Leaderboard</Link>
            <Link to='/add'>Create a poll</Link>
        </div>
    )
}

const mapStateToProps = ({ current_user }) => {
    return {
        current_user
    } 
}

export default connect(mapStateToProps)(Header);