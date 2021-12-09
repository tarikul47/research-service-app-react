import './App.css';
import Banner from './components/Banner/Banner';
import Branding from './components/Branding/Branding';
import Contact from './components/Contact/Contact';
import Explore from './components/Explore/Explore';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Partner from './components/Partners/Partner';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Banner></Banner>
      <Features></Features>
      <Explore></Explore>
      <Branding></Branding>
      <Partner></Partner>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
