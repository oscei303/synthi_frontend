import React from 'react'
import styled from 'styled-components'
import { darken } from 'polished'



const Button = styled.button `
padding: 0.40em 1em;
outline: none;
background-color: #B6DB00;
border: 1px solid #2D3047;
border-radius: 5px;
color: white;
font-size: 1em;
margin: 0.5em

    &:hover {
        background: ${darken(0.2, "#6EEB83")};
        cursor: pointer;
    }
`;


class Pattern extends React.Component {
    render(){
        return (
            <div>
                <Button>Pattern {this.props.patternNum}</Button>
            </div>
        )
    }
}

export default Pattern