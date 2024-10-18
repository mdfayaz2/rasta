import React from 'react';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import Cards from './components/cards/Cards'

function App() {
  return (
    <div className="App">
    <Home  className="nav"/>
    <Cards/>
    <Footer />
    </div>
  );
}

export default App;
