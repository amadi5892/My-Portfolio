import Nav from './routes/Nav/nav.component';
import Hero from './components/hero/hero.component';
import Contact from './components/contact/contact.component';

import './App.css';
import Experience from './components/experience/experience/experience.component';

const App = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Experience />
      <Contact />
    </div>
    
  )
}

export default App;
