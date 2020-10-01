import React from 'react';
import CanvasBoard from 'components/Canvas'
import Header from 'components/Header'
import Manipulator from 'components/Manipulator'

const headerProps = {
  urlToAboutMe: "https://kenchon.github.io/blog/authors/Kenya-Hondoh",
  urlToGithubRepos: "https://github.com/kenchon/grid-on-images"
}

// Grid-on-Images のベースコンポーネント
const App: React.FC = () => {
  return (
    <div className="App">
      <Header {...headerProps}/>
      <Manipulator />
      <CanvasBoard />
    </div>
  );
}

export default App;
