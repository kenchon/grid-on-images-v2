import React from 'react'
import styled from 'styled-components'

const GridVisilityButton: React.FC = () => {
    return (
        <div></div>
    //     <div class="switch">
    //     <SwitchLabel>
    //       <input
    //         type="checkbox"
    //         class="switch__input"
    //       />
    //       <SwitchContainer />
    //       <SwitchCircle />
    //     <SwitchLabel />
    //   </div>
    )
}

export default GridVisilityButton

const SwitchContainer = styled.span`
    top: 8px;
    display: block;
    cursor: pointer;
    position: relative;
    border-radius: 30px;
    height: 31px;
    overflow: hidden;

    &:before {
        content: "";
        display: block;
        position: absolute;
        width: calc(100% - 3px);
        height: calc(100% - 3px);
        top: 0;
        left: 0;
        border: 1.5px solid #E5E5EA;
        border-radius: 30px;
        background-color: #fff;
    }

    &:after {
        content: "";
        display: block;
        position: absolute;
        background-color: transparent;
        width: 0;
        height: 0;
        top: 50%;
        left: 50%;
        border-radius: 30px;
        -webkit-transition: all .2s;
        -moz-transition: all .2s;
            -ms-transition: all .2s;
            -o-transition: all .2s;
                transition: all .2s;
    }
`

const SwitchCircle = styled.span`
    display: block;
	top: 10px;
	left: 2px;
	position: absolute;
	-webkit-box-shadow: 0 2px 6px #999;
	        box-shadow: 0 2px 6px #999;
	width: 27px;
	height: 27px;
	-webkit-border-radius: 20px;
	        border-radius: 20px;
	background-color: #fff;
	-webkit-transition: all .2s;
	   -moz-transition: all .2s;
	    -ms-transition: all .2s;
	     -o-transition: all .2s;
	        transition: all .2s;
`
{/* 
const SwitchLabel = styled.label`
    margin-top: 20px;
	width: 50px;
	position: relative;
	display: inline-block;
` */}

{/* const SwitchInput = styled.input`
    display: none;
    .input: {
	    left: 21px;
    }
 
    {
        background-color: #4BD964;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
` */}
