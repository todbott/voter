import { useState } from "react"
import { handleSaveNewQuestion } from "../actions/questions";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

const NewPollCard = (props) => {

    const [optionOne, setOptionOne] = useState("");
    const [optionTwo, setOptionTwo] = useState("");

    const { current_user, dispatch } = props;

    const navigate = useNavigate();

    const addPoll = (e) => {
        e.preventDefault();
        let info = {
            author: current_user.user,
            optionOneText: optionOne,
            optionTwoText: optionTwo
        }
        dispatch(handleSaveNewQuestion(info))
        navigate('/home')
    }

    return (
        <div>
            Would you rather:
            <form onSubmit={addPoll}>
            <label>
                Put first option here:
                <input 
                type="text" 
                name="one" 
                value={optionOne} 
                onChange={e => setOptionOne(e.target.value)}/>
            </label>
            <label>
                Put second option here:
                <input 
                type="text" 
                name="two" 
                value={optionTwo} 
                onChange={(e) => setOptionTwo(e.target.value)}/>
            </label>
            <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

const mapStateToProps = ({ current_user }) => {
    return {
        current_user
    } 
}

export default connect(mapStateToProps)(NewPollCard);