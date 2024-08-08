
function Projects() {
    return(
        <section id="projects" className="my-projects" data-aos="fade-up">
            <h2 className="sec-title">Projects</h2>

            <div className="project-tab">
                <button type="button" className="proj-btn proj-active" data-id="loadProj">Projects</button>
                <button type="button" className="proj-btn" data-id="loadDes">Design</button>
                <button type="button" className="proj-btn" data-id="loadBlog">Blog</button>
            </div>

            
            <div className="tab tab-active" data-id="loadProj">

                <div className="projects-sec" id="dataProj"></div>
                <button type="button" className="load-btn">Show More</button>

            </div>

            <div className="tab" data-id="loadDes">

                <div className="design" id="dataDesign"></div>
                <button type="button" className="load-btn">Show More</button>				

            </div>

            <div className="tab" data-id="loadBlog">

                <div className="blg" id="dataBlog"></div>
                <button type="button" className="load-btn">Show More</button>				

            </div>

        </section>
    )
}

export default Projects;