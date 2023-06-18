import logo from './logo.svg';
import './App.css';
import TopSection from './Components/TopSection';
import About from './Components/AboutSection';
import Contact from './Components/Contact';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <TopSection/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
