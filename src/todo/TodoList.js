import React, { Component } from 'react';
import { createComponent } from 'react-fela';
import Todo from './Todo.js'
import { graphql, gql } from 'react-apollo'

const rule = () => ({
    width: '100%',
    backgroundColor: 'white',
    fontSize: '40px',
    border: '1px solid black',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
})

const TodoListStyle = createComponent(rule)

class TodoList extends Component {
    constructor() {
        super()
        this.state = {
            todos: [
                {
                    desc: 'first todo',
                    isComplete: true
                },
                {
                    desc: 'second todo',
                    isComplete: false
                },
                {
                    desc: 'third todo',
                    isComplete: true
                },
                {
                    desc: '4 todo',
                    isComplete: false
                }
            ]
        }

    }
    render() {
        if (this.props.allTodosQuery && this.props.allTodosQuery.loading) {
            return <div>Loading</div>
          }
        
          if (this.props.allTodosQuery && this.props.allTodosQuery.error) {
            return <div>Error</div>
          }
        
          const TodosToRender = this.props.allTodosQuery.allTodoes
        return (
            <TodoListStyle>
                {TodosToRender.map(todo =>
                    <Todo
                        key={todo.id}
                        todo={todo}
                    />
                )}
            </TodoListStyle>
        )
    }
}

const ALL_Todos_Query =gql `

query AllTodosQuery {
    allTodoes {
        id
        createdAt
        isComplete
        description
    }
}
` 

export default graphql(ALL_Todos_Query, { name: 'allTodosQuery' }) (TodoList)