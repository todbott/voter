import { connect } from "react-redux";
import { useEffect } from 'react';
import Card from "react-bootstrap/Card";
import { useNavigate, useLocation } from "react-router-dom";

const LeaderBoard = (props) => {

    const { questions, users } = props;
    const location = useLocation();
    const loggedInUser = localStorage.getItem("user");
    const navigate = useNavigate();

    useEffect(() => {
        if (!loggedInUser) {
            navigate("/", { state: { loggedIn: 'no', from: location } })
        }
    }, [location, loggedInUser, navigate])

    const mapped = Object.values(users).map((u) => {
        let user = u.id;
        let avatarURL = u.avatarURL;
        let numberAuthored = Object.values(questions).filter((q) => q.author === user).length;
        let numberAnswered = Object.values(questions).filter((q) => (q.optionOne.votes.includes(user) || (q.optionTwo.votes.includes(user)))).length;
        let total = numberAnswered + numberAuthored
        return Object.create({ user, avatarURL, numberAuthored, numberAnswered, total })
    })

    const sorted = Object.values(mapped).sort((a, b) => b.total - a.total)


    return (
        !loggedInUser ? (
            <div></div>
        ) : (
            <div>
                {
                    Object.values(sorted).map((u) => {
                        return (
                            <Card key={u.user}>
                                <Card.Body>
                                    <Card.Title><img src={u.avatarURL} alt="user-avatar" style={{ padding: "10px", width: "50px" }} />{u.user}: {u.total} total</Card.Title>
                                    <Card.Text>
                                        {u.user} authored {u.numberAuthored} polls, and answered {u.numberAnswered}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        )
                    })
                }
            </div>
        )
    )

}

const mapStateToProps = ({ questions, users }) => {
    return {
        questions,
        users
    }
}

export default connect(mapStateToProps)(LeaderBoard);