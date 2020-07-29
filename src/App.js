import React from 'react';
import './App.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p class="big">안녕하세요,<br />저는 요루라고 해요.</p>
        <Button
          style={{
            backgroundColor: 'whitesmoke',
          }}
          onClick={(e) => {
          e.preventDefault();
          window.location.href='http://github.com/Yoruroong';
        }}
        > <GitHubIcon color="black"/></Button>
      </header>
    </div>
  );
}

export default App;