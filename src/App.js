import React, {useState} from 'react';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Projects from './components/Projects';


const App =() => {
  const [currentSection, setCurrentSection] = useState('about');


  const renderSection = () => {
    switch (currentSection) {
      case 'about':
            return <About />;
      case 'contact':
            return <Contact/>;
      case 'resume':
            return <Resume/>;
      case 'projects':
           return <Projects/>;
      default:
            return <About />;
    }  
  };

  return (
    <div>
      <Header setCurrentSection={setCurrentSection} />
      <main style={{ padding: '20px' }}>
          {renderSection()}
      </main>
    </div>
  );
};


export default App;
