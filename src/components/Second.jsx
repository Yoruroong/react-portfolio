import React from 'react';
import Card from 'react-bootstrap/Card'

function App() {
  return (
    <div className="App App-first-container">
      <header className="App-second">
        <h1>프로젝트들</h1>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <img alt="parkbot" className="projects-image" src="https://vue-iam.yoru.pe.kr/img/parkbot.f95ddd4b.jpg" />
            <Card.Title style={{ marginTop: '10px' }}>파크봇</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">디스코드를 흥겹게</Card.Subtitle>
            <Card.Link href="#">Github</Card.Link>
            <Card.Link href="https://github.com/parkbotrd">관련 프로젝트들</Card.Link>
          </Card.Body>
        </Card>
        <h3>...추가예정!</h3>
      </header>
    </div>
  );
}

export default App;