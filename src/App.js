import React from 'react';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import Cards from './components/cards/Cards';
import Whatsapp from './components/whatsapp/Whatapp';
import ImageCarousel from './components/imagecarousel/ImageCarousel';


function App() {
  return (
    <div className="App">
    <Home  className="nav"/>
    <ImageCarousel/>
    <Cards/>
    <Whatsapp/>
    <Footer />
    </div>
  );
}

export default App;
