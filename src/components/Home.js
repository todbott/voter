import { connect } from "react-redux";
import { React, useState, useEffect } from 'react';
import { PollCard } from './PollCard';
import { useNavigate, Link, useLocation  } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";

const Home = (props) => {

    const navigate = useNavigate();
    const location = useLocation();

    const [answeredVisible, setAnsweredVisible] = useState(false)
    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        if (!loggedInUser) {
            navigate("/", {state: {loggedIn: 'no', from: location}})
        }
    },[])

    const { questions, users, current_user } = props;
    const loggedInUser = localStorage.getItem("user");

    const stampToDate = (t) => {
        return new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(t);
    }

    const newQuestions = [];
    const doneQuestions = [];
    
    try {
        if (!location.state.exists) {
            alert("The post ID you entered manually in the address bar doesn't exist")
        }
    } catch {}


    const sortedQuestions = Object.values(questions).sort((a, b) => b.timestamp - a.timestamp)

    Object.values(sortedQuestions).forEach((q) => {
        if (!(q.optionOne.votes.includes(loggedInUser)) && !(q.optionTwo.votes.includes(loggedInUser))) {
            newQuestions.push(q)
        } else {
            doneQuestions.push(q)
        }
    })


        return (
            <Container>
                <hr></hr>
                <Button onClick={() => answeredVisible ? setAnsweredVisible(false) : setAnsweredVisible(true)
                }>Show {answeredVisible ? 'New Questions' : 'Old Questions'}</Button>
                <hr></hr>
                <ul>
                {
                    answeredVisible === false && newQuestions.map((q) => (
                        <Card key={q.id}>
                            <Link to={`questions/${q.id}`}>
                            <Card.Body>
                                <Card.Title>Poll created by {q.author}</Card.Title>
                                <Card.Text>{stampToDate(q.timestamp)}</Card.Text>
                            </Card.Body>
                            </Link>
                        </Card>
                    ))
                }
                </ul>
                <ul>
                {
                    answeredVisible === true && doneQuestions.map((q) => (
                        <Card key={q.id}>
                            <Link to={`questions/${q.id}`}>
                            <Card.Body>
                                <Card.Title>Poll created by {q.author}</Card.Title>
                                <Card.Text>{stampToDate(q.timestamp)}</Card.Text>
                            </Card.Body>
                            </Link>
                        </Card>
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