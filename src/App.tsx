import React from 'react';
import CanvasBoard from 'components/Canvas'
import Header from 'components/Header'

// Grid-on-Images のベースコンポーネント
const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <CanvasBoard />
    </div>
  );
}

export default App;
