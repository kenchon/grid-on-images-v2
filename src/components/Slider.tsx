import React from 'react'
import styled from 'styled-components'

const Slider: React.FC = () => {
    return (
        <StyledSlider>
            <span>➖</span>
            <input type="range"/>
            <span>➕</span>
        </StyledSlider>
    )
}

export default Slider

const StyledSlider = styled.div`
    margin: 300px 0 100px 0;
`
