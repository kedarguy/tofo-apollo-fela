import React, { Component } from 'react';
import { createComponent } from 'react-fela';

const rule = (props) => {
    return ({
        width: '100%',
        backgroundColor: props.todo.isComplete ? '#B5B2B2' : '#F7F7F7',
        fontSize: '40px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        '> .checkBox': {
            border: '3px solid black',
            marginRight: '10px',
            backgroundColor: props.todo.isComplete ? '#30CA74' : '#F7F7F7',
            color: props.todo.isComplete ? 'white' : 'black',
            padding: '3px 10px'
        }
    })
}



class Todo extends Component {
    render() {
        return (
            <div
                className={this.props.className}
            >
                <div
                    className="checkBox"
                    onClick={ this.props.onClick }


                >
                    {this.props.todo.isComplete ? 'V' : 'X'}
                </div>
                <div>
                    {this.props.todo.description}
                </div>
            </div>
        )
    }
}

const StyledTodo = createComponent(rule, Todo, props => Object.keys(props));

export default StyledTodo