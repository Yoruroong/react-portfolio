import React from 'react';

function App() {
  return (
    <footer style={{ height: '50px', backgroundColor: 'whitesmoke', alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
        <p>© 2018-{new Date().getFullYear()} Yoru. 모든 권리 보유</p>
    </footer>
  );
}

export default App;