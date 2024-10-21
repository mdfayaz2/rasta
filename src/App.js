import React from 'react';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import Cards from './components/cards/Cards';
import Whatsapp from './components/whatsapp/Whatapp';
import ImageCarousel from './components/imagecarousel/ImageCarousel';
import FloatingForm from './components/form/FloatingForm';


function App() {
  return (
    <div className="App">
    <Home  className="nav"/>
    <ImageCarousel/>
    <Cards/>
    <FloatingForm/>
    <Whatsapp/>
    <Footer />
    </div>
  );
}

export default App;
