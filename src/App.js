import Skills from "./Component/Skills"
import About from "./Component/About";
import Home from "./Component/Home";
import Navbar from "./Component/Navbar";
import Work from "./Component/Work";
import Contact from "./Component/Contact";



function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
