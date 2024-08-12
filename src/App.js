import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from './components/Home';
import About from './components/About';
import Projects from "./components/Projects";
import Experiences from "./components/Experiences";
import Blog from "./components/Blog";
import Contact from './components/Contact';
import Error from './components/Error';
import Footer from './components/Footer';

function App() {

  return (

    <BrowserRouter>

      <NavBar/>
      <div id="content"> 
        <main className="main">
          <div className="main-inner">
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/experiences' element={<Experiences/>}/>
              <Route path='/Projects' element={<Projects/>}/>
              <Route path='/Blog' element={<Blog/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='*' element={<Error/>}/>
            </Routes>
          </div>
        </main>
          <Footer/>
      </div>

    </BrowserRouter>

  )
}

export default App;
