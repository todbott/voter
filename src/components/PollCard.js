import { connect } from "react-redux";
import { React, useState, Fragment } from 'react';
import { useNavigate, useParams } from "react-router-dom";

const PollCard = (props) => {

    const { questions, users, current_user } = props;
    const { question_id } = useParams();

    const navigate = useNavigate();

    const answerQuestion = (e, q) => {
        console.log(q);
        navigate('/home')
    }

    const question = Object.values(questions).filter((q) => q.id === question_id)
    console.log(question)
    let option_one_percent = (question[0].optionOne.votes.length/Object.values(users).length)*100
    let option_two_percent = (question[0].optionTwo.votes.length/Object.values(users).length)*100

    console.log(option_one_percent, " ", option_two_percent)



    return (
        <div>
            pollcard!
            {question[0].author} asked if people would rather {question[0].optionOne.text} or {question[0].optionTwo.text}.

            {(
                question[0].optionOne.votes.includes(current_user.user) || question[0].optionTwo.votes.includes(current_user.user) ? 
                (
                    <Fragment>
                        {question[0].optionOne.votes.length} people ({option_one_percent} percent) chose option 1
                        {question[0].optionTwo.votes.length} people ({option_two_percent} percent) chose option 2
                        You chose {question[0].optionOne.votes.includes(current_user) ? 'option one ' : 'option two'}
                    </Fragment>
                ) : 
                (
                    <div>NoHey</div>
                )
            )}
                
                
            

        </div>
    )
}

const mapStateToProps = ({ questions, users, current_user }) => {
    return {
        questions,
        users,
        current_user
    } 
}

export default connect(mapStateToProps)(PollCard);