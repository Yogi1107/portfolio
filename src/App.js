import Navbar from './components/Navbar/navbar';
import Intro from './components/Intro/intro';
import Skills from './components/Skills/skills';
import Education from './components/Education/education';
import Project from './components/Projects/project';
import CodingStats from './components/CodingStats/codingstats';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Intro />
        <Skills />
        <Education />
        <Project />
        <CodingStats />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
