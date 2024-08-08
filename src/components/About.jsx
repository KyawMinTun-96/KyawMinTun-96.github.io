
function About() {
    return(
        <section id="about" className="my-info">
            <h2 className="sec-title">About Me</h2>

            <div className="about">
                <div className="content">
                    <p>Hello! My name is Kyaw Min Tun. I'm an IT engineer and I enjoy creating things that live on the internet. I have serious passion in the role of web development. I love spending time on fixing tittle details and optimizing web apps. Also I like working in a team.</p>

                    <p>I enjoy building everything from small business sites to rich interactive web apps. If you are a business seeking a web presence or an employer looking to hire, you can get in touch with me. I have a diverse set of skills, ranging from design, to HTML + CSS + JavaScript, all the way to PHP.</p>

                    <p>I recently completed an e-commerce project using HTML5, CSS3, JavaScript, JQuery, PHP and MySQL.</p>

                    <ul className="skills">
                        <li>PHP</li>
                        <li>Python</li>
                        <li>C#</li>
                        <li>HTML5</li>
                        <li>Laravel</li>
                        <li>CSS3</li>
                        <li>MySQL</li>
                        <li>MSSQLSERVER</li>
                        <li>JavaScript</li>
                        <li>Bootstrap</li>
                        <li>JQuery</li>
                        <li>Git</li>
                        <li>GitHub</li>
                        <li>GitLab</li>
                        <li>Django</li>
                        <li>Photoshop</li>
                        <li>AWS</li>
                        <li>Power Apps</li>
                        <li>Power Automate</li>
                        <li>SharePoint</li>
                        <li>PowerShell Scripting</li>
                        <li>Azure DevOps CI/CD for Power Platform</li>
                        <li>Microsoft 365</li>
                    </ul>
                </div>
                <div className="profile">
                    <div className="wrapper">
                        <div className="image-wrapper">
                            <div className="image">
                            <img src={require('./../assets/imgs/profile/kmt_img2.png')} alt="profile" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;