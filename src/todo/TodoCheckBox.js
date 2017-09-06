import React, {Component} from 'react';
import {createComponent} from 'react-fela';

const rule = (props) => {
    return ({
            border: '3px solid black',
            marginRight: '10px',
            backgroundColor: props.isComplete ? '#30CA74' : '#F7F7F7',
            color: props.isComplete ? 'white' : 'black',
            padding: '3px 10px'

        }
    )
}


class TodoCheckBox extends Component {
    render() {
        return (
            <div
                className={this.props.className}
                onClick={ this.props.onClick }
            >
                {this.props.isComplete ? 'V' : 'X'}
            </div>

        )
    }
}



const StyledTodoCheckBox = createComponent(rule, TodoCheckBox, props => Object.keys(props));

export default StyledTodoCheckBox