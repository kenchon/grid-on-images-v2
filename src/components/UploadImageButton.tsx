import React from 'react'
import styled from 'styled-components'

const StyledUploadImageButton = styled.label`
    display: inline-block;
    font-size: 20px;
    cursor: pointer; /* カーソル時にポインターにする */
    margin: 1em 0;
    line-height: 1.4;
    background: #EE6B4D;
    color: #FFF;
    font-size: 0.95em;
    border-radius: 2em;
    border: 2px solid;
    transition: 0.2s; /* ホバーをなめらかに */
    &:hover {
      box-shadow: 0 8px 10px -2px rgba(0, 0, 0, 0.2); /* 影を表示 */
    }
`

const UploadImageButton: React.FC = () => {
    return (
        <div>
            <StyledUploadImageButton>
                <input type="file" id="file"/>
            </StyledUploadImageButton>
        </div>
    )
}

export default UploadImageButton;