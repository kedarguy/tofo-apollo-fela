import React, { Component } from 'react';
import { createComponent } from 'react-fela';
import TodoCheckBox from './TodoCheckBox';
import TodoDeleteBox from './TodoDeleteBox';

const rule = (props) => {
    return ({
        width: '100%',
        backgroundColor: props.todo.isComplete ? '#B5B2B2' : '#F7F7F7',
        fontSize: '40px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',

    })
}



class Todo extends Component {
    render() {
        return (
            <div
                className={this.props.className}
            >
                <TodoCheckBox
                    isComplete={this.props.todo.isComplete}
                    onClick={ this.props.onClick }

                />
                <div>
                    {this.props.todo.description}
                </div>
                <TodoDeleteBox
                    todoId={this.props.todo.id}
                />
            </div>
        )
    }
}

const StyledTodo = createComponent(rule, Todo, props => Object.keys(props));

export default StyledTodo