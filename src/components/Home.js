import { connect } from "react-redux";
import { React, useState, useEffect } from 'react';
import { useNavigate, Link, useLocation } from "react-router-dom";
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
            navigate("/", { state: { loggedIn: 'no', from: location } })
        }
    }, [location, navigate])

    const { questions } = props;
    const loggedInUser = localStorage.getItem("user");

    const stampToDate = (t) => {
        return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(t);
    }

    const newQuestions = [];
    const doneQuestions = [];

    try {
        if (!location.state.exists) {
            return (
                <h2>404: Post doesn't exist</h2>
            )
        }
    } catch { }


    const sortedQuestions = Object.values(questions).sort((a, b) => b.timestamp - a.timestamp)

    Object.values(sortedQuestions).forEach((q) => {
        if (!(q.optionOne.votes.includes(loggedInUser)) && !(q.optionTwo.votes.includes(loggedInUser))) {
            newQuestions.push(q)
        } else {
            doneQuestions.push(q)
        }
    })


    return (
        !loggedInUser ? (
            <div></div>
        ) : (
            <Container>
                <hr></hr>
                <Button data-testid="show-polls-button" onClick={() => answeredVisible ? setAnsweredVisible(false) : setAnsweredVisible(true)
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
    )

}

const mapStateToProps = ({ questions, users }) => {
    return {
        questions,
        users
    }
}

export default connect(mapStateToProps)(Home);