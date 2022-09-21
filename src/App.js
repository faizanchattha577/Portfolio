import Home from "./componenets/Home";
import NavBar from "./componenets/NavBar";
import Sociallinks from "./componenets/Sociallinks";
import About from "./componenets/About";
import Portfolio from "./componenets/Portfolio";
import Experiance from "./componenets/Experiance";
import Contact from "./componenets/Contact";

function App() {
  return (
   <div>
    <NavBar/> 
    <Home/> 
    <About/>
    <Portfolio/>
    <Experiance/>
    <Contact/>


    <Sociallinks/>
   </div>
  );
}

export default App;
