import React from 'react'
import styled from 'styled-components'

class CanvasBoard extends React.Component {
    constructor(props: any) {
        super(props);
        
        this.state = {
            isGridVisible: false,
            imgCanvasScale: 1.0
        }
    }

    // componentDidMount() {
    //     document.getElementById('button-grid-on-off').addEventListener('click', this.toggleGridVisility);
    // }

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

export default CanvasBoard

const CanvasContainer = styled.div`
    position: relative;
    margin: 300px 20px 0 30px;
    width: 100%;
    canvas {
        position: absolute;
        margin-top: 100px;
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
