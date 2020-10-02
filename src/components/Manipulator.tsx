import React from 'react'
import styled from 'styled-components'

import Slider from 'components/Slider'
import GridColorButton from 'components/GridColorButton'
import UploadImageButton from 'components/UploadImageButton'

const Manipulator: React.FC = () => {
    return (
        <StyledManipulator>
            <table>
                <tr>
                    <td>画像を選択</td>
                    {/* <td><UploadImageButton /></td> */}
                    <td>{"TODO: ファイルアップロードボタン"}</td>
                </tr>
                <tr>
                    <td>画像サイズ</td>
                    <td><Slider /></td>
                </tr>
                <tr>
                    <td>グリッドの色</td>
                    <td><GridColorButton /></td>
                </tr>
            </table>
        </StyledManipulator>
    )
};

const StyledManipulator = styled.div`
    margin: 200px 0 200px 0;
    padding-left: 50px;
    font-weight: 700;
    font-size: 30px;
`;

export default Manipulator;