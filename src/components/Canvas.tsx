import React from 'react';
import styled from 'styled-components';

const CanvasContainer = styled.div`
    position: relative;
    canvas {
        position: absolute;
        top: 0;
        left: 0;
    }
`

const ImgCanvas: React.FC = () => {
    return(
        <canvas></canvas>
    )
}

const GridCanvas: React.FC = () => {
    return(
        <canvas></canvas>
    )
}

class CanvasBoard extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isGridVisible: false,
            imgCanvasScale: 1.0
        }
    }

    renderImgCanvas: React.FC = () => {
        return (
            <ImgCanvas />
        )
    }
    
    renderGridCanvas: React.FC = () => {
        return (
            <GridCanvas />
        )
    }

    render() {
        return (
            <div>
                <CanvasContainer>
                    {this.renderImgCanvas(this.props)}
                    {this.renderGridCanvas(this.props)}
                </CanvasContainer>
            </div>
        )
    }
}

export default CanvasBoard;