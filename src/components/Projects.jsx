import { useState, useEffect } from "react";
import Blog from '../components/Blog';
import {loadSkillsPrj} from './LoadSkills'

function Projects() {

    const [activeTab, setActiveTab] = useState('loadProj');
    const [visibleCards, setVisibleCards] = useState(6);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [visibleDesign, setVisibleDesign] = useState(8);
    const [designScreenWidth, setDesignScreenWidth] = useState(window.innerWidth);
    const [loading, setLoading] = useState(false); // Add loading state


    useEffect(() => {

        window.addEventListener('resize', () => setScreenWidth(window.innerWidth));
        return () => {
            window.removeEventListener('resize', () => setScreenWidth(window.innerWidth));
        }
    }, []);


    useEffect(() => {

        if(screenWidth > 1024) {
            setVisibleCards(6);
        }else if(screenWidth > 768) {
            setVisibleCards(4);
        }else {
            setVisibleCards(4);
        }

    }, [screenWidth]);


    const handleShowMore = () => {
        if (screenWidth > 1024) {
            setVisibleCards(prev => prev + 3);
        } else {
            setVisibleCards(prev => prev + 2);
        }
    };

    const handleClickTab = (actName) => {
        setLoading(true); // Set loading to true when a tab is clicked
        setActiveTab(actName);

        // Simulate a loading delay
        setTimeout(() => {
            setLoading(false); // Set loading to false when content is ready
        }, 1000); // Adjust delay time as needed
    }

    const projData = [
        {
            "id" : 1,
            "title" : "One Mart Online Shop",
            "content" : "This project focuses on developing a modern, responsive e-commerce website for OneMart. The site will feature a wide range of products and secure checkout options. With a clean and organized layout, users can easily browse categories, view detailed product information, and make purchases.",
            "languages": ["HTML5", "CSS3", "JavaScript", "JQuery", "Bootstrap", "PHP", "MySQL"],
            "github": "https://github.com/HtetYinMin/One-Mart",
            "demo": "https://github.com/HtetYinMin/One-Mart"
        },

        {
            "id" : 2,
            "title" : "Modern IT Website",
            "content" : "This project involved designing and developing a state-of-the-art website for Modern IT Co.,Ltd.",
            "languages": ["HTML5", "CSS3", "JavaScript", "JQuery", "React", "Bootstrap", "Firebase"],
            "github": "https://github.com/KyawMinTun-96/modern-it",
            "demo": "https://modernit-85be9.web.app/"
        },
    
        {
            "id" : 3,
            "title" : "Hotel Website",
            "content" : "This project involves creating a visually appealing and user-friendly website for a hotel. The front-end design will showcase the hotel's amenities, rooms, and services with high-quality images and an elegant layout.",
            "languages": ["HTML5", "CSS3", "JavaScript", "JQuery"],
            "github": "https://github.com/KyawMinTun-96/hotel.mm",
            "demo": "https://kyawmintun-96.github.io/hotel.mm/"
        },

        {
            "id" : 4,
            "title" : "Jewellery Website",
            "content" : "This jewelry website focuses on creating a visually stunning and user-friendly interface. The design will feature a clean and elegant layout. The site will be fully responsive, ensuring a seamless browsing experience on all devices, from desktops to mobile phones.",
            "languages": ["HTML5", "CSS3", "JavaScript", "JQuery"],
            "github": "https://github.com/KyawMinTun-96/Jewellery",
            "demo": "https://kyawmintun-96.github.io/Jewellery/"
        },

        {
            "id" : 5,
            "title" : "Shop Sphere (Current Project)",
            "content": "ShopSphere is a modern e-commerce platform built using React and Material UI, designed for users to easily browse, customize, and purchase products online. The platform focuses on providing a seamless shopping experience through an intuitive interface, responsive design, and flexible product management. ",
            "languages": ["HTML5", "CSS3", "JavaScript", "JQuery", "React", "Firebase", "Material UI"],
            "github": "https://github.com/KyawMinTun-96/shop-sphere",
            "demo": "https://shopsphere-8539f.web.app/"
        },

        {
            "id" : 6,
            "title" : "Travel and Tour Project",
            "content" : "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, eveniet.",
            "languages": ["HTML5", "CSS3", "JavaScript", "JQuery"],
            "github": "https://github.com/KyawMinTun-96",
            "demo": "https://github.com/KyawMinTun-96/Travel-and-Tour"
        },
    
        {
            "id" : 7,
            "title" : "Internal Document Management System",
            "content" : "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, eveniet.",
            "languages": ["HTML5", "CSS3", "JavaScript", "JQuery", "PHP", "MySQL"],
            "github": "https://github.com/KyawMinTun-96",
            "demo": "https://github.com/KyawMinTun-96/IDMS"
        },
    
        {
            "id" : 8,
            "title" : "News Website",
            "content" : "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, eveniet.",
            "languages": ["HTML5", "CSS3", "JavaScript", "JQuery", "Bootstrap", "PHP", "MySQL"],
            "github": "https://github.com/KyawMinTun-96",
            "demo": "https://github.com/KyawMinTun-96/news.mm"
        },
    
        {
            "id" : 9,
            "title" : "Laravel Project",
            "content" : "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, eveniet.",
            "languages": ["HTML5", "CSS3", "JavaScript", "JQuery", "PHP", "MySQL", "Laravel"],
            "github": "https://github.com/KyawMinTun-96",
            "demo": "https://github.com/KyawMinTun-96/Laravel"
        },
        {
            "id" : 10,
            "title" : "Simple Blog Project",
            "content" : "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, eveniet.",
            "languages": ["HTML5", "CSS3", "JavaScript", "JQuery", "PHP", "MySQL"],
            "github": "https://github.com/KyawMinTun-96",
            "demo": "https://github.com/KyawMinTun-96/simple-blog"
        },
        {
            "id" : 11,
            "title" : "Simple Inventory System Project",
            "content" : "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, eveniet.",
            "languages": ["C#", "MSSQLSERVER"],
            "github": "https://github.com/KyawMinTun-96",
            "demo": "https://github.com/KyawMinTun-96/SimpleInventorySystem"
        },
        {
            "id" : 12,
            "title" : "Employee Management System Project",
            "content" : "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, eveniet.",
            "languages": ["HTML5", "CSS3", "JavaScript", "JQuery", "Python"],
            "github": "https://github.com/KyawMinTun-96",
            "demo": "https://github.com/KyawMinTun-96/EmployeeManagementSystem"
        },
        {
            "id" : 13,
            "title" : "Simple Student Registration",
            "content" : "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, eveniet.",
            "languages": ["Python"],
            "github": "https://github.com/KyawMinTun-96/Simple_Student_Registration_using_Tkinter-",
            "demo": "https://github.com/KyawMinTun-96/Simple_Student_Registration_using_Tkinter-"
        }
    ];

    const renderProjects = () => {

        // let output = [];
        let animatePrj = ["animate__slideInRight", "animate__slideInDown", "animate__slideInLeft", "animate__slideInUp"];
        let aniCountPrj = 0;
        let directionPrj = 1;

        return projData.slice(0, visibleCards).map((item, i) => {

            if(i === 4) {
                directionPrj = -1;
            }

            if(aniCountPrj === 0) {
                directionPrj = 1;
            }


            if((aniCountPrj === 4 || aniCountPrj === 3 || aniCountPrj === 1 || aniCountPrj===2 || aniCountPrj === 0) && (directionPrj === -1)) {
                aniCountPrj -= 2;
            }


            if ((aniCountPrj === 3 || aniCountPrj === 1 || aniCountPrj === 2 || aniCountPrj === 0) && directionPrj === 1) {
                aniCountPrj++;
            }

            return(
                <div className={`card animate__animated ${animatePrj[aniCountPrj]}`} key={item.id}>
                        <div className="card-body">
                            <div className="card-header img-hover-effect">
                                <a href={item.github} title="github" target="_blank" rel="noreferrer"><i className="fa fa-github" aria-hidden="true"></i></a>
                                <a href={item.demo} title="demo" target="_blank" rel="noreferrer"><i className="fa fa-link" aria-hidden="true"></i></a>
                            </div>
                            <p className="title">{item.title}</p>

                            <div className="description">
                                <p>{item.content.substring(0, 140)}...</p>
                            </div>
                        </div>

                        <div className="card-footer">
                            <ul>
                            {
                                item.languages.map((language, index) => (
                                    <li key={index} className='img-hover-effect'>
                                        {loadSkillsPrj(language)}
                                    </li>
                                ))
                            }
                            </ul>
                        </div>
                </div>
            );

        });
        
    }


    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');
    const [selectedName, setSelectedName] = useState('');


    const openModal= (name, image) => {
        setModalOpen(true);
        setSelectedImage(image);
        setSelectedName(name);
    }

    const closeModal = () => {
        setModalOpen(false);
        setSelectedImage('');
        setSelectedName('');
    };


    const designData = [
        {
            "id" : 1,
            "title": "One Mart",
            "image" : "one_mart.png"
        },
        {
            "id" : 2,
            "title": "Zfreeti Hotel",
            "image" : "zfreeti_hotel.png"
        },
        {
            "id" : 3,
            "title": "Jewellery",
            "image" : "jewellery.jpg"
        },
        {
            "id": 4,
            "title": "Modern IT Company",
            "image": "modernit.png"
        },
        {
            "id" : 5,
            "title": "New Portfolio",
            "image" : "new_portfolio.png"
        },
        {
            "id" : 6,
            "title": "Travel & Tour",
            "image" : "travel_and_tour1.png"
        },
        {
            "id" : 7,
            "title": "Simple Student Registration",
            "image" : "SR.png"
        },
        {
            "id" : 8,
            "title": "Internal Document Management",
            "image" : "idms.png"
        },
        {
            "id" : 9,
            "title": "Employee Management System",
            "image": "ems.png"
        },
        {
            "id" : 10,
            "title": "Simple Inventory System",
            "image": "simple_inventory.png"
        },
        {
            "id" : 11,
            "title": "Voyager Website",
            "image": "voyager.jpg"
        },
        {
            "id" : 12,
            "title": "Travel Website",
            "image": "travel.jpg"
        },
        {
            "id" : 13,
            "title": "Bus Ticket System",
            "image": "bus_ticket_system.png"
        },
        {
            "id" : 14,
            "title": "Email Verification",
            "image": "email_verification.png"
        },
        {
            "id" : 15,
            "title": "Simple Blog System",
            "image": "Simple Blog System.png"
        },
        {
            "id" : 16,
            "title": "Previous Portfolio",
            "image" : "old_portfolio.png"
        }
    ];


    useEffect(() => {
    
        window.addEventListener('resize', () => setDesignScreenWidth(window.innerWidth));
        return () => {
            window.removeEventListener('resize', () => setDesignScreenWidth(window.innerWidth));
        }
    }, []);


    useEffect(() => {
    
        if(designScreenWidth > 1024) {
            setVisibleDesign(8);
        }else if(designScreenWidth > 768) {
            setVisibleDesign(6);
        }else {
            setVisibleDesign(6);
        }

    }, [designScreenWidth]);


    const handleDesignShowMore = () => {
        if (designScreenWidth > 1024) {
            setVisibleDesign(prev => prev + 4);
        } else {
            setVisibleDesign(prev => prev + 3);
        }
    };

    const renderDesigns = () => {

        let animateDesign = ["animate__slideInRight", "animate__slideInDown", "animate__slideInLeft", "animate__slideInUp"];
        let aniCountDesign = 0;
        let directionDesign = 1;

        return designData.slice(0, visibleDesign).map((value, v) => {

            if(v === 4) {
                directionDesign = -1;
            }

            if(aniCountDesign === 0) {
                directionDesign = 1;
            }


            if((aniCountDesign === 4 || aniCountDesign === 3 || aniCountDesign === 1 || aniCountDesign===2 || aniCountDesign === 0) && (directionDesign === -1)) {
                aniCountDesign -= 2;
            }


            if ((aniCountDesign === 3 || aniCountDesign === 1 || aniCountDesign === 2 || aniCountDesign === 0) && directionDesign === 1) {
                aniCountDesign++;
            }

            return(
                <div className={`card animate__animated ${animateDesign[aniCountDesign]}`} key={value.id}>
                    <div className="card-image">
                        <img src={require(`../assets/imgs/designs/${value.image}`)} alt="designs"/>
                    </div>
                                        
                    <button type="button" onClick={() => openModal(value.title, value.image)} className="view-btn">
                        <i className="fa fa-eye"></i>
                    </button>
                </div>
            );

        });
        
    }

    const renderPlaceholderCards = () => {
        return Array(activeTab === 'loadDes' ? 8 : 6).fill(0).map((_, index) => (
            <div className="card placeholder" key={index}>
                <div className="card-body">
                    <div className="card-header"></div>
                    <p className="title placeholder-title"></p>
                    <div className="description">
                        <p className="placeholder-content"></p>
                    </div>
                </div>
                <div className="card-footer">
                    <ul>
                        <li className="placeholder-languages"></li>
                    </ul>
                </div>
            </div>
        ));
    }


    const renderContent = () => {
        if (loading) {

            return renderPlaceholderCards(); // Show placeholder cards while loading

        } else {
            if (activeTab === 'loadProj') {

                return renderProjects();

            } else if (activeTab === 'loadDes') {

                return renderDesigns();

            }
        }
    }


    return(
        <>
            <section id="projects" className="my-projects" data-aos-delay="500" data-aos="fade-up" data-aos-duration="3000">
                <h2 className="sec-title">Projects</h2>

                <div className="project-tab">
                    <button 
                    type="button" 
                    className={`proj-btn ${activeTab === 'loadProj' ? 'proj-active' : ''}`}
                    onClick={() => {
                        handleClickTab('loadProj');
                        }}
                    >Projects</button>
                    <button 
                    type="button"
                    className={`proj-btn ${activeTab === 'loadDes' ? 'proj-active' : ''}`}
                    onClick={() => {
                        handleClickTab('loadDes')
                    }}
                    >Design</button>
                    <button 
                    type="button" 
                    className={`proj-btn ${activeTab === 'loadBlog' ? 'proj-active' : ''}`}
                    onClick={() => {
                        handleClickTab('loadBlog')
                    }}
                    >Blog</button>
                </div>


                    <div className={`tab ${activeTab === 'loadProj' ? 'tab-active' : ''}`}>

                        <div className="projects-sec">
                            {renderContent()}
                        </div>
                        <button type="button" onClick={handleShowMore} className="load-btn">Show More</button>

                    </div>

                    <div  className={`tab ${activeTab === 'loadDes' ? 'tab-active' : ''}`}>

                        <div className="design">
                            {renderContent()}
                        </div>
                        <button type="button" onClick={handleDesignShowMore} className="load-btn">Show More</button>				

                    </div>

                    <div  className={`tab ${activeTab === 'loadBlog' ? 'tab-active' : ''}`}>

                        {activeTab === 'loadBlog'?

                        <Blog padding='0px'/>
                        
                        :

                        ''}
                    </div>
            </section>


            {/* Model */}
            <div className="model" style={modalOpen ? { zIndex: '99999999', opacity: 1 } : {}}>
                <div className="model-title">
                    <p id="title">{modalOpen ? selectedName : ''}</p>
                </div>
                <div className="model-inner">
                    <img src={modalOpen ? require(`../assets/imgs/designs/${selectedImage}`) : ''} alt={modalOpen ? selectedName : ''} />
                </div>
                <div className="close-btn" onClick={closeModal}>&times;</div>
            </div>
        </>
    )
}

export default Projects;