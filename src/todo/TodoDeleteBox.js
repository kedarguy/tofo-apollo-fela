import React, {Component} from 'react';
import {createComponent} from 'react-fela';
import { graphql, gql } from 'react-apollo'

const rule = () => {
    return ({
            border: '3px solid black',
            marginRight: '10px',
            backgroundColor: '#f70812',
            color: 'white',
            padding: '3px 10px',

    
        }
    )
}


class TodoDeleteBox extends Component {

    deleteTodo(todoId) {
        console.log('testing delete ' + todoId)
        this.props.deleteTodoMutation({
            variables: {
                id: todoId
            },
        })
            .then(({data}) => {
                console.log('got data from mutation ', data)
            }).catch((error) => {
            console.log('error sending mutation', error)
        });
    }
    render() {
        return (
            <div
                className={this.props.className}
                onClick={() => this.deleteTodo(this.props.todoId)}
            >
                X
            </div>

        )
    }
}

const DELETE_TODO_MUTATION = gql`

mutation DeleteTodoMutation($id: ID!) {
    deleteTodo (
        id: $id
    ) {
        id
        
    }
}
`

const StyledDeleteBox = createComponent(rule, TodoDeleteBox, props => Object.keys(props));

export default (
    graphql(DELETE_TODO_MUTATION, {name: 'deleteTodoMutation'}))
(StyledDeleteBox)