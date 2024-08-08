import {NavLink} from 'react-router-dom';


function NavBar() {

    const BtnOpen = (event) => {

      event.preventDefault();

      let menuBtn = document.querySelector('.menu-btn');
      let closeBtn = document.getElementById('close-btn');
      let openBtn = document.getElementById('open-btn');
      let mobileNav = document.querySelector('.mobile-nav');

      closeBtn.style.display = "block"; //for close btn
      openBtn.style.display = "none"; //for open btn
      mobileNav.classList.add('slide-nav'); //for mobile nav
      document.body.classList.add('blur'); //blur body
      document.body.classList.add('scroll'); //body scrooll off
      menuBtn.classList.add('hover'); //for zindex

    }


    const BtnClose = (event) => {

      event.preventDefault();

      let menuBtn = document.querySelector('.menu-btn');
      let closeBtn = document.getElementById('close-btn');
      let openBtn = document.getElementById('open-btn');
      let mobileNav = document.querySelector('.mobile-nav');

      closeBtn.style.display = "none"; //for close btn
      openBtn.style.display = "block"; //for open btn
      mobileNav.classList.remove('slide-nav'); //for mobile nav
      document.body.classList.remove('blur'); //blur body
      document.body.classList.remove('scroll'); //body scrooll off
      menuBtn.classList.remove('hover'); //for zindex
    }

    return (
            <div className="navbar">
              <div className="inner nav-group">
                <div className="menu">
                  <div className="logo">
                    <a href="/" className="logo-name">Portfolio</a>
                  </div>
                  <ul className="nav">
                    <li className="nav-item">
                      <NavLink 
                        to="/about" 
                        className="nav-link" 
                        style={({isActive}) => { return {color: isActive? "#c46f00" : "#fff"}}}>About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink 
                        to="/experiences" 
                        className="nav-link"
                        style={({isActive}) =>{ return {color: isActive? '#c46f00' : '#fff'}}}>Experiences
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink 
                        to="/projects" 
                        className="nav-link" 
                        style={({isActive}) =>{ return {color: isActive? '#c46f00' : '#fff'}}}>Projects
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink 
                        to="/blog" 
                        className="nav-link" style={({isActive}) =>{ return {color: isActive? '#c46f00' : '#fff'}}}>Blog
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink 
                        to="/contact" 
                        className="nav-link"
                        style={({isActive}) =>{ return {color: isActive? '#c46f00' : '#fff'}}}>Contact
                        </NavLink>
                    </li>
                  </ul>
                </div>
        
                <div className="mobile-nav">
        
                  <div className="profile">
                    <div className="profile-img">
                      <img src={require('../assets/imgs/profile/kmt_img2.png')} alt="profile"/>
                    </div>
                    <div className="profile-name">
                      <span>
                        Kyaw
                      </span>
                      <span>
                        Min Tun
                      </span>
                    </div>
                  </div>
        
                  <ul className="mobile-menu">
                    <li className="menu-item">
                      <NavLink to="/about" className="menu-link"
                      style={({isActive}) => { return {color: isActive? "#c46f00" : "#fff"}}}>About
                      </NavLink>
                    </li>
                    <li className="menu-item">
                      <NavLink to="/experiences" className="menu-link"
                      style={({isActive}) => { return {color: isActive? "#c46f00" : "#fff"}}}>Experiences
                      </NavLink></li>
                    <li className="menu-item">
                      <NavLink to="/projects" className="menu-link"
                        style={({isActive}) => { return {color: isActive? "#c46f00" : "#fff"}}}>Projects
                      </NavLink></li>
                    <li className="menu-item">
                      <NavLink to="/Blog" className="menu-link"
                        style={({isActive}) => { return {color: isActive? "#c46f00" : "#fff"}}}>Blog
                    </NavLink></li>
                    <li className="menu-item">
                      <NavLink to="/contact" className="menu-link"
                      style={({isActive}) => { return {color: isActive? "#c46f00" : "#fff"}}}>Contact
                    </NavLink></li>
                  </ul>
        
                  
                  <div className="resume">
                    <a href={require("../assets/resume/KyawMinTun_CV.pdf")}>Resume</a>
                  </div>
        
                  <div className="social">
                    <a target="_blank" href="https://github.com/KyawMinTun-96" title="github" rel="noreferrer"><i className="fa fa-github" aria-hidden="true"></i></a>
                    <a target="_blank" href="https://www.facebook.com/profile.php?id=100012289154309" title="facebook"  rel="noreferrer"><i className="fa fa-facebook" rel="noreferrer" aria-hidden="true"></i></a>
                    <a target="_blank" href="https://wa.me/959794144487" title="whatsapp" rel="noreferrer"><i className="fa fa-whatsapp" aria-hidden="true"></i></a>
                    {/* <a target="_blank" href="https://www.linkedin.com/in/kyaw-min-tun-788a5a264/" title="linkedin"><i class="fa fa-linkedin" aria-hidden="true"></i></a> */}
                    <a target="_blank" href="https://line.me/ti/p/~kmt24" title="line" rel="noreferrer"><i className="bi bi-line"></i></a>
                  </div>
        
        
                </div>
        
                <div className="menu-btn">
                  <i className="bi bi-list" onClick={BtnOpen} id="open-btn" style={{fontSize: '30px', color: '#fff'}}></i>
                  <i className="bi bi-x" onClick={BtnClose} id="close-btn" style={{fontSize: '35px', color: '#fff', display: 'none'}}></i>
                </div>
              </div>
            </div>
    )


}




export default NavBar;

