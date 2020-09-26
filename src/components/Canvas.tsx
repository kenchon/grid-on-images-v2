import React, { ReactElement } from 'react';
import styled from 'styled-components';

const Canvas: React.FC = () => {
    return(
        <CanvasContainer>
            <ImgCanvas />
            <GridCanvas />
        </CanvasContainer>
    )
}

export default Canvas;

const CanvasContainer = styled.div`
    position: relative;
    canvas {
        position: absolute;
        top: 0;
        left: 0;
    }
`

const ImgCanvas: React.FC = () => {
    return (
        <canvas></canvas>
    )
}

const GridCanvas: React.FC = () => {
    return (
        <canvas></canvas>
    )
}