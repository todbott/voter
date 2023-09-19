import { connect } from "react-redux";
import { useState, Fragment } from 'react';

const LeaderBoard = (props) => {

    const { questions, users } = props;

    return (
        <div>
            {
                Object.values(users).map((u) => {
                let user = u.id;
                let numberAuthored = Object.values(questions).filter((q) => q.author === user);
                let numberAnswered = Object.values(questions).filter((q) => (q.optionOne.votes.includes(user) || (q.optionTwo.votes.includes(user))));
                return <div key={user}>
                    {user} authored {numberAuthored.length} polls, and answered {numberAnswered.length}
                </div>
               })
            }
        </div>
    )
}

const mapStateToProps = ({ questions, users }) => {
    return {
        questions,
        users
    } 
}

export default connect(mapStateToProps)(LeaderBoard);