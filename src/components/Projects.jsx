import { useState, useEffect } from "react";

function Projects() {

    const [activeTab, setActiveTab] = useState('loadProj');
    const [visibleCards, setVisibleCards] = useState(6);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

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
        setActiveTab(actName);
    }

    const projData = [
        {
            "id" : 1,
            "title" : "One Mart Online Shop",
            "content" : "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, eveniet.",
            "languages": ["HTML5", "CSS3", "JavaScript", "JQuery", "Bootstrap", "PHP", "MySQL"],
            "github": "https://github.com/KyawMinTun-96",
            "demo": "https://github.com/HtetYinMin/One-Mart"
        },
    
        {
            "id" : 2,
            "title" : "Internal Document Management System",
            "content" : "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, eveniet.",
            "languages": ["HTML5", "CSS3", "JavaScript", "JQuery", "PHP", "MySQL"],
            "github": "https://github.com/KyawMinTun-96",
            "demo": "https://github.com/KyawMinTun-96/IDMS"
        },
    
        {
            "id" : 3,
            "title" : "Myanmar News Website",
            "content" : "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, eveniet.",
            "languages": ["HTML5", "CSS3", "JavaScript", "JQuery", "Bootstrap", "PHP", "MySQL"],
            "github": "https://github.com/KyawMinTun-96",
            "demo": "https://github.com/KyawMinTun-96/news.mm"
        },
    
        {
            "id" : 4,
            "title" : "Jewellery Online Shop",
            "content" : "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, eveniet.",
            "languages": ["HTML5", "CSS3", "JavaScript", "JQuery", "PHP", "MySQL"],
            "github": "https://github.com/KyawMinTun-96",
            "demo": "https://github.com/KyawMinTun-96/Jewellery"
        },
    
        {
            "id" : 5,
            "title" : "Travel and Tour Project",
            "content" : "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, eveniet.",
            "languages": ["HTML5", "CSS3", "JavaScript", "JQuery", "PHP", "MySQL"],
            "github": "https://github.com/KyawMinTun-96",
            "demo": "https://github.com/KyawMinTun-96/Travel-and-Tour"
        },
    
        {
            "id" : 6,
            "title" : "Hotel Website Project",
            "content" : "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, eveniet.",
            "languages": ["HTML5", "CSS3", "JavaScript", "JQuery", "PHP", "MySQL"],
            "github": "https://github.com/KyawMinTun-96",
            "demo": "https://github.com/KyawMinTun-96/hotel.mm"
        },
    
        {
            "id" : 7,
            "title" : "Laravel Project",
            "content" : "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, eveniet.",
            "languages": ["HTML5", "CSS3", "JavaScript", "JQuery", "PHP", "MySQL", "Laravel framework"],
            "github": "https://github.com/KyawMinTun-96",
            "demo": "https://github.com/KyawMinTun-96/Laravel"
        },
        {
            "id" : 8,
            "title" : "Simple Blog Project",
            "content" : "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, eveniet.",
            "languages": ["HTML5", "CSS3", "JavaScript", "JQuery", "PHP", "MySQL"],
            "github": "https://github.com/KyawMinTun-96",
            "demo": "https://github.com/KyawMinTun-96/simple-blog"
        },
        {
            "id" : 9,
            "title" : "Simple Inventory System Project",
            "content" : "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, eveniet.",
            "languages": ["C#", "MSSQL SERVER"],
            "github": "https://github.com/KyawMinTun-96",
            "demo": "https://github.com/KyawMinTun-96/SimpleInventorySystem"
        },
        {
            "id" : 10,
            "title" : "Employee Management System Project",
            "content" : "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, eveniet.",
            "languages": ["HTML5", "CSS3", "JavaScript", "JQuery", "Python", "Django"],
            "github": "https://github.com/KyawMinTun-96",
            "demo": "https://github.com/KyawMinTun-96/EmployeeManagementSystem"
        },
        {
            "id" : 11,
            "title" : "Simple Student Registration",
            "content" : "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, eveniet.",
            "languages": ["Python", "Tkinter"],
            "github": "https://github.com/KyawMinTun-96",
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
                            <div className="card-header">
                                <a href={item.github} title="github" target="_blank" rel="noreferrer"><i className="fa fa-github" aria-hidden="true"></i></a>
                                <a href={item.demo} title="projects" target="_blank" rel="noreferrer"><i className="fa fa-link" aria-hidden="true"></i></a>
                            </div>
                            <p className="title">{item.title}</p>

                            <div className="description">
                                <p>{item.content}</p>
                            </div>
                        </div>

                        <div className="card-footer">
                            <ul>
                                <li>{item.languages.join(', ')}</li>
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
        console.log(name, image);

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
            "id" : 4,
            "title": "Previous Portfolio",
            "image" : "old_portfolio.png"
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
        }
    ]

    const renderDesigns = () => {

        // let output = [];
        let animateDesign = ["animate__slideInRight", "animate__slideInDown", "animate__slideInLeft", "animate__slideInUp"];
        let aniCountDesign = 0;
        let directionDesign = 1;

        return designData.slice(0, visibleCards).map((item, i) => {

            if(i === 4) {
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
                <div className={`card animate__animated ${animateDesign[aniCountDesign]}`} key={item.id}>
                    <div className="card-image">
                        <img src={require(`../assets/imgs/designs/${item.image}`)} alt="designs"/>
                    </div>
                                        
                    <button type="button" onClick={() => openModal(item.title, item.image)} className="view-btn">
                        <i className="fa fa-eye"></i>
                    </button>
                </div>
            );

        });
        
    }


    return(
        <>
            <section id="projects" className="my-projects" data-aos="fade-up">
                <h2 className="sec-title">Projects</h2>

                <div className="project-tab">
                    <button 
                    type="button" 
                    className={`proj-btn ${activeTab === 'loadProj' ? 'proj-active' : ''}`}
                    onClick={() => {
                        handleClickTab('loadProj')
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

                        <div className="projects-sec">{renderProjects()}</div>
                        <button type="button" onClick={handleShowMore} className="load-btn">Show More</button>

                    </div>

                    <div  className={`tab ${activeTab === 'loadDes' ? 'tab-active' : ''}`}>

                        <div className="design">{renderDesigns()}</div>
                        <button type="button" onClick={handleShowMore} className="load-btn">Show More</button>				

                    </div>

                    <div  className={`tab ${activeTab === 'loadBlog' ? 'tab-active' : ''}`}>

                        <div className="blg"></div>
                        <button type="button" className="load-btn">Show More</button>				

                    </div>

            </section>


            <div className="model">
                <div className="model-title">
                    <p id="title">{selectedName}</p>
                </div>
                <div className="model-inner">
                    <img src={`../assets/imgs/designs/${selectedImage}"`} id="design-image" alt={selectedName}/>
                </div>
                <div className="close-btn" onClick={closeModal}>&times;</div>
            </div>
        </>
    )
}

export default Projects;