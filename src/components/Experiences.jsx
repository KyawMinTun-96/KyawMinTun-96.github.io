import { useState, useEffect } from "react";
import {loadSkills, PArray} from './LoadSkills'

function Experiences() {


    const [activeTab, setActiveTab] = useState('tabEdu');
    const [pName, setPName] = useState([]);

    useEffect(() => {
        setPName(PArray);
    }, []);

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    }


    return(
        <section id="experience" className="my-skill" data-aos-delay="500" data-aos="fade-up" data-aos-duration="3000">
            <h2 className="sec-title">Experiences</h2>

            <div className="skill-sec">
                <div className="skill-tab">
                    <button 
                    type="button" 
                    className={`tab-btn ${activeTab === 'tabEdu' ? 'highlight' : ''}`}
                    onClick={() => handleTabClick('tabEdu')}
                    >
                        <span>Education</span>
                    </button>
                    <button 
                    type="button" 
                    className={`tab-btn ${activeTab === 'tabDev' ? 'highlight' : ''}`}
                    onClick={() => handleTabClick('tabDev')}
                    >
                        <span>Development</span>
                    </button>
                    <button 
                    type="button" 
                    className={`tab-btn ${activeTab === 'tabExp' ? 'highlight' : ''}`}
                    onClick={() => handleTabClick('tabExp')}
                    >
                        <span>Experiences</span>
                    </button>
                    <button 
                    type="button" 
                    className={`tab-btn ${activeTab === 'tabSkl' ? 'highlight' : ''}`}
                    onClick={() => handleTabClick('tabSkl')}
                    >
                        <span>Skills</span>
                    </button>
                    <button 
                    type="button" 
                    className={`tab-btn ${activeTab === 'tabTol' ? 'highlight' : ''}`}
                    onClick={() => handleTabClick('tabTol')}
                    >
                        <span>Tools</span>
                    </button>
                </div>

                <div className={`tabSkill description ${activeTab === 'tabEdu' ? 'tabSkill-active' : ''}`}>
                    <h3>Education</h3>
                    <ul>
                        <li className="" style={{animationDelay: '.1s'}}>
                            Technological University (Mawlamyine)
                            <p className="dev_year"><small>December 2014 - September 2020, (Completed)</small></p>
                            <p>Bachelor of Engineering (Information Technology)</p>
                        </li>

                        <li className="" style={{animationDelay: '.3s'}}>
                            Basic Education High School (Daik-U)
                            <p className="dev_year"><small>June 2014</small></p>
                            <p>Matriculation Exam (Completed)</p>
                        </li>
                    </ul>
                </div>

                <div className={`tabSkill description ${activeTab === 'tabDev' ? 'tabSkill-active' : ''}`}>
                    <h3 className="skill_title">Development</h3>
                    <ul>
                        <li className="" style={{animationDelay: '.3s'}}>
                            Udemy
                            <p className="dev_year"><small>August 2023 - September 2023, (Online)</small></p>
                            <p>AWS Solutions Architect Associate Course</p>
                        </li>

                        <li className="" style={{animationDelay: '.3s'}}>
                            Aquarius Tech Myanmar
                            <p className="dev_year"><small>Oct 2019 - Dec 2019, (Yangon)</small></p>
                            <p>Web Design Course</p>
                        </li>

                        <li className="" style={{animationDelay: '.7s'}}>
                            NANO TECH Computer Training Center
                            <p className="dev_year"><small>Feb 2017 - Jun 2017, (Mawlamyine)</small></p>
                            <p>Java Programming Course</p>
                        </li>

                        <li className="" style={{animationDelay: '1s'}}>
                            NANO TECH Computer Training & Maintenance, Repairing Center
                            <p className="dev_year"><small>Oct 2015 - Nov 2015, (Mawlamyine)</small></p>
                            <p>A+ Course</p>
                        </li>

                        <li className="" style={{animationDelay: '1.2s'}}>
                            Easyway Thai Language Center II
                            <p className="dev_year"><small>April 2024 - May 2024, (Online)</small></p>
                            <p>Basic Thai Speaking Course</p>
                        </li>
                    </ul>
                </div>

                <div className={`tabSkill description ${activeTab === 'tabExp' ? 'tabSkill-active' : ''}`} >
                    <h3 className="skill_title">Experiences</h3>
                    <ul>
                        <li className="" style={{animationDelay: '.1s'}}>
                            Spiceworks Myanmar Co.,Ltd
                            <p className="dev_year"><small>July 2020 - August 2020, <span style={{display: 'inline', color: '#939393'}}></span></small></p>
                            {/* <p>Intern Position</p> */}
                        </li>
                        <li className="" style={{animationDelay: '.5s'}}>
                            Galaxy Software Co.,Ltd
                            <p className="dev_year">
                                <small>November 2021 - January 2023, 
                                    {/* (<span id="galaxy_exp" style="display: inline; color: #939393;"></span>) */}
                                </small>
                            </p>
                            {/* <p>Software Support Technician Position</p> */}
                        </li>

                        <li className="" style={{animationDelay: '.7s'}}>
                            NEX4 ICT Solutions Co.,Ltd
                            <p className="dev_year">
                                <small>March 2023 - April 2024, 
                                {/* (<span id="nex4_exp" style="display: inline; color: #939393;"></span>) */}
                                </small>
                            </p>
                            {/* <p>Microsoft System/Cloud Engineer Position</p> */}
                        </li>

                    </ul>
                </div>

                <div className={`tabSkill description ${activeTab === 'tabSkl' ? 'tabSkill-active' : ''}`} >
                    <h3 className="skill_title">Skills</h3>
                    <ul className="skill_list">
                        {
                            loadSkills(pName)
                        }
                    </ul>
                </div>

                <div className={`tabSkill description ${activeTab === 'tabTol' ? 'tabSkill-active' : ''}`} >
                    <h3 className="skill_title">Tools</h3>
                    <ul className="skill_list">
                        <li className="" style={{animationDelay: '.2s'}}>
                            Visual Studio Code
                        </li>

                        <li className="" style={{animationDelay: '.3s'}}>
                            Sublime Text
                        </li>

                        <li className="" style={{animationDelay: '.3s'}}>
                            Microsoft Visual Studio
                        </li>

                        <li className="" style={{animationDelay: '.5s'}}>
                            Adobe Photoshop
                        </li>
                        <li className="" style={{animationDelay: '.7s'}}>
                            Git
                        </li>
                        <li className="" style={{animationDelay: '.8s'}}>
                            Beyond Compare
                        </li>

                        <li className="" style={{animationDelay: '.9s'}}>
                            XAMPP
                        </li>

                        <li className="" style={{animationDelay: '1s'}}>
                            Figma
                        </li>
                        <li className="" style={{animationDelay: '1.1s'}}>
                            Postman API Platform
                        </li>
                        <li className="" style={{animationDelay: '1.2s'}}>
                            Termius -SSH Platform
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )

}


export default Experiences;