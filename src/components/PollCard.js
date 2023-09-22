import { connect } from "react-redux";
import { React, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { handleSaveQuestionAnswer } from "../actions/questions";
import { handleSaveUserAnswer } from "../actions/users";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const PollCard = (props) => {

    const { questions, users, dispatch } = props;
    const { question_id } = useParams();

    const navigate = useNavigate();
    const location = useLocation()
    const loggedInUser = localStorage.getItem("user");

    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        if (!loggedInUser) {
            navigate("/", { state: { loggedIn: 'no', from: location } })
        }
    }, [location, navigate])

    const answerQuestion = (e, qid, ans) => {
        let info = {
            authedUser: loggedInUser,
            qid: qid,
            answer: ans
        }
        dispatch(handleSaveQuestionAnswer(info))
        dispatch(handleSaveUserAnswer(info))
        navigate('/home')
    }

    const question = Object.values(questions).filter((q) => q.id === question_id)
    if (question.length === 0) {
        return (
            <Card>
                <Card.Body>
                    <Card.Title>
                        404 Error
                    </Card.Title>
                    <Card.Text>
                        A poll with the id {question_id} doesn't exist
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    } else {
        let option_one_percent = (question[0].optionOne.votes.length / Object.values(users).length) * 100
        let option_two_percent = (question[0].optionTwo.votes.length / Object.values(users).length) * 100

        return (
            <div>
                <h2><img src={users[question[0].author].avatarURL} alt="user-avatar" style={{ width: "50px" }} /> {question[0].author} asked if people would rather </h2>



                <Card>
                    <Card.Body>
                        <Card.Title>
                            {question[0].optionOne.text}
                        </Card.Title>
                        <Card.Text>
                            {(
                                question[0].optionOne.votes.includes(loggedInUser) || question[0].optionTwo.votes.includes(loggedInUser) ?
                                    (
                                        <span>
                                            {question[0].optionOne.votes.length} {question[0].optionOne.votes.length > 1 || question[0].optionOne.votes.length === 0 ? 'people' : 'person'}  ({option_one_percent} percent) chose this{question[0].optionOne.votes.includes(loggedInUser) ? (<b>, including you</b>) : ''}
                                        </span>
                                    ) :
                                    (
                                        <span>
                                            <Button onClick={(e) => answerQuestion(e, question[0].id, 'optionOne')} >Choose</Button>
                                        </span>
                                    )
                            )}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>
                            {question[0].optionTwo.text}
                        </Card.Title>
                        <Card.Text>
                            {(
                                question[0].optionOne.votes.includes(loggedInUser) || question[0].optionTwo.votes.includes(loggedInUser) ?
                                    (
                                        <span>
                                            {question[0].optionTwo.votes.length} {question[0].optionTwo.votes.length > 1 || question[0].optionTwo.votes.length === 0 ? 'people' : 'person'} ({option_two_percent} percent) chose this{question[0].optionTwo.votes.includes(loggedInUser) ? (<b>, including you</b>) : ''}
                                        </span>
                                    ) :
                                    (
                                        <span>
                                            <Button onClick={(e) => answerQuestion(e, question[0].id, 'optionTwo')} >Choose</Button>
                                        </span>
                                    )
                            )}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>


        )
    }
}

const mapStateToProps = ({ questions, users, current_user }) => {
    return {
        questions,
        users,
        current_user
    }
}

export default connect(mapStateToProps)(PollCard);