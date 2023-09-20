import { useState, useEffect } from "react"
import { handleSaveNewQuestion } from "../actions/questions";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const NewPollCard = (props) => {

    const [optionOne, setOptionOne] = useState("");
    const [optionTwo, setOptionTwo] = useState("");

    const { current_user, dispatch } = props;

    const loggedInUser = localStorage.getItem("user");

    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        if (!loggedInUser) {
            navigate("/", {state: {loggedIn: 'no'}})
        }
    },[])

    const navigate = useNavigate();

    const addPoll = (e) => {
        e.preventDefault();
        let info = {
            author: loggedInUser,
            optionOneText: optionOne,
            optionTwoText: optionTwo
        }
        dispatch(handleSaveNewQuestion(info))
        navigate('/home')
    }



        return (
            <div>
                <h2>Would you rather...</h2>
                <Form onSubmit={addPoll}>
                    <Form.Group className="mb-3">
                        <Form.Label>Option one</Form.Label>
                        <Form.Control type="text" placeholder="option one" onChange={e => setOptionOne(e.target.value)} />
                        <Form.Text className="text-muted" >                        
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Option two</Form.Label>
                        <Form.Control type="text" placeholder="option two"  onChange={(e) => setOptionTwo(e.target.value)}/>
                        <Form.Text className="text-muted">                        
                        </Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    
}

const mapStateToProps = ({ current_user }) => {
    return {
        current_user
    } 
}

export default connect(mapStateToProps)(NewPollCard);