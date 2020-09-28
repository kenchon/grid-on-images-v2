import React from 'react';
import CanvasBoard from 'components/Canvas'
import Header from 'components/Header'
import Manipulator from 'components/Manipulator'
import BodyContainer from 'components/BodyContainer'

// Grid-on-Images のベースコンポーネント
const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <BodyContainer>
        <Manipulator />
        <CanvasBoard />
      </BodyContainer>
    </div>
  );
}

export default App;
