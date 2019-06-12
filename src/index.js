import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => (
    <div className="ui container comments">
        <ApprovalCard>
            <CommentDetail 
                author="sam" 
                timeAgo="today at 4:50pm" 
                comment="hey" 
                imageSrc={faker.image.avatar()}
            />
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail 
                author="jared" 
                timeAgo="today at 1:30pm" 
                comment="hi" 
                imageSrc={faker.image.avatar()}
            />
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail 
                author="mike" 
                timeAgo="today at 4:56pm" 
                comment="hello" 
                imageSrc={faker.image.avatar()}
            />
        </ApprovalCard>
    </div>
)

ReactDOM.render(<App />, document.querySelector("#root"));
