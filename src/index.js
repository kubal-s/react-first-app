import React from 'react';
import ReactDOM from 'react-dom';

import faker from 'faker';

import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = ()=>{
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <h4>Warning!</h4>
                <div>Are you sure you want to do this?</div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="sam" 
                timeAgo="Today at 6:00pm" 
                imgSrc={faker.image.image()} 
                content= "Nice blog post!"/>
            </ApprovalCard>

            <CommentDetail author="ram" 
                timeAgo="Today at 6:00pm" 
                imgSrc={faker.image.image()} 
                content= "Nice blog post!"/>
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)