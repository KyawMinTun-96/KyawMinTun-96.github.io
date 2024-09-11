import Info from './Info';
import About from "./About";
import Contact from './Contact';
import Experiences from "./Experiences";
import Projects from './Projects';
import VisitorCount from './VisitorCount';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {

    useEffect(() => {
        AOS.init({
            once: true,
            delay: 0, // values from 0 to 3000, with step 50ms
            duration: 400, // values from 0 to 3000, with step 50ms
            easing: 'ease', // default easing for AOS animations
            //ffset: 120, // offset (in px) from the original trigger point
            //mirror: false, // whether elements should animate out while scrolling past them
            //anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should
        });
        
        AOS.refresh();
    }, []);


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