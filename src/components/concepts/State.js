import {useState} from 'react';

const State = () => {
    return(
        <div className='main'>
            <div className='mainDiv'>
                <ul>
                    <dt>UseState is unique to Functional Components</dt>
                    <dd>Class components have a seperate means of using and changing state</dd>
                    <dt>UseState uses array destructuring</dt>
                    <dd>UseState provides a state variable and a setState function</dd>
                    <dt>UseState is a Hook</dt>
                    <dd>UseState is a hook baked into React</dd>
                    <dt>Triggers re-renders</dt>
                    <dd>Like with props changes, changing the state of a compnent re-renders the whole component</dd>
                </ul>
            </div>
            <div>
                <StateExample />
            </div>
        </div>
    );
};

export default State;

function StateExample() {
    const [text, setText] = useState('initial value');
    const[likeNum, setLikeNum] = useState(0);

    return(
        <div>
            <input value={text} onChange={e => setText(e.target.value)} />
            <br />
            <br />
            <img
                style={{width: '100px', height: '100px'}}
                src="https://upload.wikipedia.org/wikipedia/commons/1/13/Facebook_like_thumb.png"
                onClick={() => setLikeNum(likeNum + 1)}
            />
            <span>{likeNum}</span>
        </div>
    );
};