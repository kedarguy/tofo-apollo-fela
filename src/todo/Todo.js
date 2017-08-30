import React, { Component } from 'react';
import { createComponent } from 'react-fela';

const rule = ({ isComplete }) => ({
    width: '100%',
    backgroundColor: isComplete ? '#FFFFFF' : '#F7F7F7',
    fontSize: '40px',
    display: 'flex',
    flexDirection : 'row',
    justifyContent : 'flex-start',
    '> .checkBox': {
        border: '3px solid black',
        marginRight: '10px',
        backgroundColor: isComplete ? '#30CA74' : '#F7F7F7',
        color: isComplete ? 'white' : 'black',
        padding: '3px 10px'
    }
})

const TodoStyle = createComponent(rule)

export default class Todo extends Component {
    render() {
        return (
            <TodoStyle isComplete={this.props.todo.isComplete} >
            <div className="checkBox">
                {this.props.todo.isComplete ? 'V' : 'X'}
            </div>
            <div>
                {this.props.todo.description}
            </div>
            </TodoStyle>
        )
    }
}
