import { connect } from "react-redux";
import { useState } from 'react';

const LeaderBoard = (props) => {

    const { questions, users } = props;

    Object.values(users).forEach((u) => {
        let user = u.id
        let numberAuthored = Object.values(questions).filter((q) => q.author === user)
        let numberAnswered = Object.values(questions).filter((q) => (q.optionOne.votes.includes(user) || (q.optionTwo.votes.includes(user))))
        console.log(user, " authored ", numberAuthored.length, " polls, and answered ", numberAnswered.length)
    })

    return (
        <div>
            LeaderBoard!

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