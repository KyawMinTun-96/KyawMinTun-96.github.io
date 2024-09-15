

function Info() {
    return(
        <section className="info">
        <p data-aos="fade-right" data-aos-delay="300" data-aos-duration="3000">Hi, my name is</p>
        <p data-aos="fade-right" data-aos-delay="400" data-aos-duration="3000">Kyaw Min Tun.</p>
        <p data-aos="fade-right" data-aos-delay="500" data-aos-duration="3000">I build things for the web.</p>
        <p data-aos="fade-right" data-aos-delay="600" data-aos-duration="3000">I’m specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products.</p>
        <div className="cv-btn" data-aos="fade-up-left" data-aos-delay="900" data-aos-duration="3000">
            {/* <a href={require("../assets/resume/KyawMinTun_CV.pdf")} target="_blank" rel="noreferrer">Resume</a> */}
            <a href='/' rel='noreferrer'>Resume</a>
        </div>
    </section>
    )
}

export default Info;