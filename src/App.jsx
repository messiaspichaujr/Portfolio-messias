import Navbar from './components/NavBar';
import Footer from './components/Footer';

import Hero from './sections/Hero';
import Carrossel from './sections/Carrossel';
import Contato from './sections/Contato';

function App(){
  return (
    <>
      <Navbar/>
      <Hero/>
      <Carrossel/>
      <Contato/>
      <Footer/>
    </>
  );
}

export default App;