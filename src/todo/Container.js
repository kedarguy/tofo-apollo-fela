import React, { Component } from 'react';
import { createComponent } from 'react-fela';
import InnerContainer from './InnerContainer.js'

const rule = () => ({
    minHeight: '100vh',
    width: '100%',
    backgroundColor: '#18BE9A',
    fontSize: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
})

const ContainerStyle = createComponent(rule)

export default class Container extends Component {
    render() {
        return (
            <ContainerStyle>
                <InnerContainer/>
            </ContainerStyle>
        )
    }
}
