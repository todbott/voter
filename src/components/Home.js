import { connect } from "react-redux";
import { React, useState } from 'react';
import { PollCard } from './PollCard';
import { useNavigate, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

const Home = (props) => {

    const navigate = useNavigate();

    const [answeredVisible, setAnsweredVisible] = useState(false)

    const { questions, users, current_user } = props;

    const newQuestions = [];
    const doneQuestions = [];
    console.group("Questions")
    console.log(questions)
    console.groupEnd()
    Object.values(questions).forEach((q) => {
        if (!(q.optionOne.votes.includes(current_user.user)) && !(q.optionTwo.votes.includes(current_user.user))) {
            newQuestions.push(q)
        } else {
            doneQuestions.push(q)
        }
    })
    return (
        <Container>
            <button onClick={() => {
                answeredVisible ? setAnsweredVisible(false) : setAnsweredVisible(true)
            }}>Show {answeredVisible ? 'New Questions' : 'Old Questions'}</button>
            <ul>
            {
                answeredVisible === false && newQuestions.map((q) => (
                    <li key={q.id}>
                        <Link to={`questions/${q.id}`}>{q.id}</Link>
                    </li>
                ))
            }
            </ul>
            <ul>
            {
                answeredVisible === true && doneQuestions.map((q) => (
                    <li key={q.id}>
                        <Link to={`questions/${q.id}`}>{q.id}</Link>
                    </li>
                ))
            }
            </ul>

        </Container>
    )
}

const mapStateToProps = ({ questions, users, current_user }) => {
    return {
        questions,
        users,
        current_user
    } 
}

export default connect(mapStateToProps)(Home);