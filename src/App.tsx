import React from 'react';
import CanvasBoard from 'components/Canvas'
import Header from 'components/Header'
import Manipulator from 'components/Manipulator'
// image sources
import imgSrcToAboutMe from 'assets/about-me.png';
import imgSrcToGithubRepos from 'assets/github.png';

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

const headerProps = {
  aboutMeIcon: {
      urlToAboutMe: "https://kenchon.github.io/blog/authors/Kenya-Hondoh",
      imgSrcToAboutMe: imgSrcToAboutMe
  },
  githubReposIcon: {
      urlToGithubRepos: "https://github.com/kenchon/grid-on-images",
      imgSrcToGithubRepos: imgSrcToGithubRepos
  }
}

export default App;
