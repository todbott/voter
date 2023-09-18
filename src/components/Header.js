import { connect } from "react-redux";

const Header = (props) => {
    const { current_user } = props;
    console.log(current_user)
    return (
        <div>
            header -- welcome {current_user.user}
        </div>
    )
}

const mapStateToProps = ({ current_user }) => {
    return {
        current_user
    } 
}

export default connect(mapStateToProps)(Header);