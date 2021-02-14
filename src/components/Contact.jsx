import React from 'react';

function App() {
  return (
    <div className="App App-first-container">
        <header className="App-contact">
            <div>
                <h1>연락하기</h1>
                <p><i style={{ marginLeft: '1px' }} class="far fa-envelope"></i><br />사적: <a href="mailto:yoru@outlook.kr">yoru@outlook.kr</a><br />팀 관련: <a href="mailto:yoru@callisto.team">yoru@callisto.team</a></p>
                <p><i class="fab fa-telegram"></i><i style={{ marginLeft: '3px' }} class="fab fa-twitter"></i><i style={{ marginLeft: '3px' }} class="fab fa-github"></i><br /> <a href="https://yoruroong.github.io/contact-me/">@Yoruroong</a></p>
            </div>
        </header>
    </div>
  );
}

export default App;