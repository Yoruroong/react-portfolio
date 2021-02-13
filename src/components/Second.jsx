import React from 'react';
import fzp from '../images/fzp.jpg'
import { CardGroup, Card } from 'react-bootstrap'

function App() {
  return (
    <div className="App App-first-container">
      <header className="App-second">
        <div>
        <h1>프로젝트들<br /></h1>
        <CardGroup>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <img alt="parkbot" className="projects-image" src="https://vue-iam.yoru.pe.kr/img/parkbot.f95ddd4b.jpg" />
            <Card.Title style={{ marginTop: '10px' }}>파크봇</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">디스코드를 흥겹게</Card.Subtitle>
            <Card.Link href="https://github.com/callistoteam/parkbot">Github</Card.Link>
            <Card.Link href="https://github.com/parkbotrd">관련 프로젝트들</Card.Link>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <img alt="parkbot" className="projects-image" src={fzp} />
            <Card.Title style={{ marginTop: '10px' }}>FZP</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">암호가 걸려있는 압축 파일의 비밀번호 찾기</Card.Subtitle>
            <Card.Link href="https://github.com/Yoruroong/FZP">Github</Card.Link>
          </Card.Body>
        </Card>
        </CardGroup>
        <h3>...추가예정!</h3>
        </div>
      </header>
    </div>
  );
}

export default App;