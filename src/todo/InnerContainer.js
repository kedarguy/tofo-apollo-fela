import React, { Component } from 'react';
import { createComponent } from 'react-fela';
import Header from './Header.js'
import TodoList from './TodoList.js'

const rule = () => ({
    minHeight: '100px',
    width: '75%',
    fontSize: '40px',
    border: '1px solid black',
    display: 'flex',
    flexDirection: 'column'
})

const ContainerStyle = createComponent(rule)

export default class InnerContainer extends Component {
    render() {
        return (
            <ContainerStyle>
                <Header/>
                <TodoList/>
            </ContainerStyle>
        )
    }
}
