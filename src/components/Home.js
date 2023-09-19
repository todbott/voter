import { connect } from "react-redux";
import { React, useState } from 'react';
import { PollCard } from './PollCard';
import { useNavigate, Link } from "react-router-dom";

const Home = (props) => {

    const navigate = useNavigate();

    const [answeredVisible, setAnsweredVisible] = useState(false)

    const { questions, users, current_user } = props;

    // const showQuestion = (e, q) => {
    //     console.log(q);
    //     navigate('/questions', {state:{id:q.id}})
        
    // }

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
        <div>
            <button onClick={() => {
                answeredVisible ? setAnsweredVisible(false) : setAnsweredVisible(true)
            }}>Show {answeredVisible ? 'unanswered questions' : 'questions that have alrady been answered'}</button>
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

export default connect(mapStateToProps)(Home);