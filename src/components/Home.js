import { connect } from "react-redux";
import Header from './Header';

const Home = (props) => {
    const { questions, users, current_user } = props;

    const showDone = (e, q) => {
        console.log(q);
        
    }

    const showNew = (e, q) => {
        console.log(q);
    }

    const newQuestions = [];
    const doneQuestions = [];
    Object.values(questions).forEach((q) => {
        if (!(q.optionOne.votes.includes(current_user.user)) && !(q.optionTwo.votes.includes(current_user.user))) {
            newQuestions.push(q)
        } else {
            doneQuestions.push(q)
        }
    })
    Object.values(users).forEach((u) => {
        console.log(u)
    })
    return (
        <div>
            <Header />
            <ul>
            {
                newQuestions.map((q) => (
                    <li key={q.id}>
                        <button onClick={(e) => showNew(e, q)}>
                            {q.id}
                        </button>
                    </li>
                ))
            }
            </ul>
            <ul>
            {
                doneQuestions.map((q) => (
                    <li key={q.id}>
                        <div onClick={(e) => showDone(e, q)}>
                            {q.id}
                        </div>
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