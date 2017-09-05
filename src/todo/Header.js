import React, { Component } from 'react';
import { createComponent } from 'react-fela';

const rule = () => ({
    width: '100%',
    backgroundColor: '#1BBC9D',
    fontSize: '40px',
    border: '1px solid black'
})

const HeaderStyle = createComponent(rule)

class Header extends Component {

    render() {
        return (
            <HeaderStyle>
                Header
            </HeaderStyle>
        )
    }
}


export default Header