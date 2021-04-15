import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Particles from "react-particles-js";
import About from "./components/About";
import Services from "./components/Services";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
//import Project from "./components/Project";
//import Specialize from "./components/Specialize";
function App() {
  return (
    <>
    <Particles
      params={{
        particles:{
          number:{
            value:30,
            density:{
              enable:true,
              value_area:900
            }
          },
          shape:{
            type:"circle",
            stroke:{
              width:6,
              color:"#f6ab00"
            }
          }
        }
      }}
    />
    <Navbar/>
    <Header/>
   
    <About/>
    <Services/>
    <Skills/>
    <Contact/>
    
    <Footer/>
    </>
  );
}

export default App;
