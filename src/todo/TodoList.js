import React, {Component} from 'react';
import {createComponent} from 'react-fela';
import Todo from './Todo.js'
import {graphql, gql, compose} from 'react-apollo'
import CreateTodo from './CreateTodo.js'


const rule = () => ({
    width: '100%',
    backgroundColor: 'white',
    fontSize: '40px',
    border: '1px solid black',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
})

class TodoList extends Component {

    toggleTodoIsComplete(todo) {
        this.props.toggleTodoMutation({
            variables: {
                id: todo.id,
                isComplete: !todo.isComplete
            },
        })
            .then(({data}) => {
                console.log('got data from mutation ', data)
            }).catch((error) => {
            console.log('error sending mutation', error)
        });
    }

    _updateCacheAfterTodo = (store, createTodo) => {

        const data = store.readQuery({ query: ALL_TODOES_QUERY })

        data.todos.push(createTodo);

        store.writeQuery({ query: ALL_TODOES_QUERY, data })
    }


    render() {
        if (this.props.allTodoesQuery && this.props.allTodoesQuery.loading) {
            return <div>Loading</div>
        }

        if (this.props.allTodoesQuery && this.props.allTodoesQuery.error) {
            return <div>Error</div>
        }


        const TodoesToRender = this.props.allTodoesQuery.allTodoes

        return (
            <div>
                {TodoesToRender.map(todo => {
                        return (
                            <Todo
                                key={todo.id}
                                todo={todo}
                                onClick={ e => this.toggleTodoIsComplete(todo, e) }
                                updateStoreAfterCreateTodo={this._updateCacheAfterTodo}
                            />
                        )
                    }
                )}

                <CreateTodo/>
            </div>
        )
    }
}

export const ALL_TODOES_QUERY = gql`

query AllTodoesQuery {
    allTodoes {
        id
        createdAt
        isComplete
        description
    }
}

`

const TOGGLE_TODO_MUTATION = gql`

mutation ToggleTodoMutation($id: ID! , $isComplete: Boolean!) {
    updateTodo (
        id: $id
        isComplete: $isComplete
    ) {
        id
        description
        isComplete
    
    }
}
`

const StyledTodoList = createComponent(rule, TodoList, props => Object.keys(props))


export default compose(
    graphql(ALL_TODOES_QUERY, {name: 'allTodoesQuery'}),
    graphql(TOGGLE_TODO_MUTATION, {name: 'toggleTodoMutation'}))
(StyledTodoList)