import React from 'react';
import styled from 'styled-components';

const Slider: React.FC = () => {
    return (
        <div>
            <span>➖</span>
            <input type="range"/>
            <span>➕</span>
        </div>
    )
}

const StyledSlider = styled(Slider)`
    margin: 300px 0 100px 0;
`

export default StyledSlider;