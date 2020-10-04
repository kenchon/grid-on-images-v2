import React from 'react'
import styled from 'styled-components'

const UploadImageButton: React.FC = () => {
    return (
        <div>
            <StyledUploadImageButton>
                画像を選択
                <input type="file"/>
            </StyledUploadImageButton>
        </div>
    )
}

export default UploadImageButton

const StyledUploadImageButton = styled.label`
    display: inline-block;
    font-size: 20px;
    cursor: pointer; /* カーソル時にポインターにする */
    margin-left: -18px;
    background: #EE6B4D;
    height: 35px;
    width: 150px;
    text-align: center;
    color: #FFF;
    font-size: 0.95em;
    border-radius: 2em;
    border: 2px solid;
    transition: 0.2s; /* ホバーをなめらかに */
    
    &:hover {
      box-shadow: 0 8px 10px -2px rgba(0, 0, 0, 0.2); /* 影を表示 */
    }

    input {
        display: none;
    }
`