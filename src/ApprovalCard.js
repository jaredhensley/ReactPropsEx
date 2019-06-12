import React from 'react';
import ReactDOM from 'react-dom';
import { directive } from '@babel/types';

const ApprovalCard = (props) => {
    return (
        <div class="ui card">
            <div class="content">{props.children}</div>
            <div class="extra content">
                <div class="ui two buttons">
                    <div class="ui basic green button">approve</div>
                    <div class="ui basic red button">reject</div>
                </div>
            </div>
        </div>
    );
};

export default ApprovalCard;