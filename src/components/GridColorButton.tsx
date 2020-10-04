import React from 'react'
import styled from 'styled-components'

const GridColorButton:React.FC = () => {
    return (
        <StyledGridColorButton>
            <GridColorBlack />
            <GridColorWhite />
        </StyledGridColorButton>
    )
}

export default GridColorButton

const StyledGridColorButton = styled.div`
    display: inline-block;
    padding-left: 10px;

    a {
        margin: auto 10px auto 10px;
    }
`

const GridColorWhite = styled.a`
    display: inline-block;
    text-decoration: none;
    background: white;
    color: rgba(255, 255, 255, 0.47);
    font-weight: bold;
    width: 30px;
    height: 30px;
    line-height: 30px;
    border-radius: 50%;
    text-align: center;
    overflow: hidden;
    box-shadow: 0px 0px 0px 3px #ebebeb;
    border: solid 2px rgba(255, 255, 255, 0.47);
    transition: .4s;

    &:hover {
        box-shadow: 0px 0px 0px 3px #bababa
    }

    &:active {
        background: #bababa;
    }
`

const GridColorBlack = styled.a`
    display: inline-block;
    text-decoration: none;
    background: black;
    color: rgba(255, 255, 255, 0.47);
    font-weight: bold;
    width: 30px;
    height: 30px;
    line-height: 30px;
    border-radius: 50%;
    text-align: center;
    overflow: hidden;
    box-shadow: 0px 0px 0px 3px #000000;
    border: solid 2px rgba(255, 255, 255, 0.47);
    transition: .4s;

    &:hover {
        box-shadow: 0px 0px 0px 3px #bababa
    }

    &:active {
        background: #bababa;
    }
`
