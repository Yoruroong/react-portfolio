import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HelloWorld from './components/HelloWorld'
import First from './components/First'
import Second from './components/Second'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
        <HelloWorld />
        <First />
        <Second />
        <Footer />
    </div>
  );
}

export default App;