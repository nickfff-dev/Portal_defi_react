import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Press from './Press';
import Intro from './Intro';
import PricePrediction from './PricePrediction';
import Exchange from './Exchange';
import Presstwo from './Presstwo';
import Footer from './Footer';
import Team from './Team';
import Videosec from './Videosec';


function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <PricePrediction />
      <Exchange />
      <Team/>
      <Press />
      <Presstwo />
    
      <Footer />
    </div>
  );
}

export default App;
