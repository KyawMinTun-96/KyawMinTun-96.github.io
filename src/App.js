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
import {useState, useEffect} from 'react';
import './assets/css/app.css';

function App() {

  const[loading, setLoading] = useState(true);
  useEffect(() => {

    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, [loading])

  return(
    loading ? (
      <div className="loader">
        <div className="terminal-loader">
          <div className="terminal-header">
            <div className="terminal-title">Status</div>
            <div className="terminal-controls">
              <div className="control close"></div>
              <div className="control minimize"></div>
              <div className="control maximize"></div>
            </div>
          </div>
          <div className="text">Loading...</div>
        </div>
      </div>
    ) : (
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
  )
}

export default App;
