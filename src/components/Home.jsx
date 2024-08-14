import Info from './Info';
import About from "./About";
import Contact from './Contact';
import Experiences from "./Experiences";
import Projects from './Projects';
import VisitorCount from './VisitorCount';

function Home() {
    return(
        <>
            <Info/>
            <About/>
            <Experiences/>
            <Projects/>
            <VisitorCount/>
            <Contact/>
        </>
    )
}

export default Home;