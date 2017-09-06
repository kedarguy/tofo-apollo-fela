import React, {Component} from 'react';
import {createComponent} from 'react-fela';
import {graphql, gql} from 'react-apollo'
import { ALL_TODOES_QUERY} from './TodoList';

const rule = () => {
    return ({
        marginTop: '20px',
        backgroundColor: 'white',
        fontSize: '40px',
        width: '100%',

    })
}

class createTodo extends Component {
    constructor() {
        super();
        this.state = {description: ''};

    }


    render() {
        return (
            <div
                className={this.props.className}
            >
                <label>
                    Add new Todo:
                    <input
                        type="text"
                        value={this.state.description}
                        onChange={ (e) => this.setState({description: e.target.value})}
                        placeholder='New Todo Description...'
                    />
                </label>
                <button
                    onClick={() => {
                        this._createTodo()
                        this.setState({description: ''})
                    }}
                >
                    Add Todo
                </button>
            </div>
        )
    }

    _createTodo = async() => {
        const {description} = this.state
        await this.props.createTodoMutation({
            variables: {
                description,
            },
            update: (store, {data: { createTodo } }) => {
                const data = store.readQuery({ query: ALL_TODOES_QUERY})
                data.allTodoes.splice(-1,0,createTodo)
                store.writeQuery({
                    query: ALL_TODOES_QUERY,
                    data
                })
            }

        });
    }
}

const CREATE_TODO_MUTATION = gql`
mutation CreateTodoMutation($description: String!) {
  createTodo(
    description: $description,
  
  ) {
    id
    createdAt
    isComplete
    description
  }
}
`


const apolloCreateTodo = graphql(CREATE_TODO_MUTATION, {name: 'createTodoMutation'})(createTodo)

export default createComponent(rule, apolloCreateTodo)
