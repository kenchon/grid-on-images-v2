import React from 'react';
import Canvas from 'components/Canvas'
import Header from 'components/Header'

// Grid-on-Images のベースコンポーネント
const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Canvas />
    </div>
  );
}

export default App;
