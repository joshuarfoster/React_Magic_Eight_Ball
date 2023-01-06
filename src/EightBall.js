import React, {useState} from 'react';
import './EightBall.css';

function EightBall(props) {
    const [answer, setAnswer] = useState({msg:"Think of a question", color: "black"})
    function randAnswer(answers) {
        return answers[Math.floor(Math.random() * answers.length)];
    }
    return (
        <div className="EightBall" style={{backgroundColor: answer.color}} onClick={() => setAnswer(randAnswer(props.answers))}>
            <p className="EightBallMsg"> {answer.msg} </p>
        </div>
    )
}

export default EightBall