

function Info() {
    return(
        <section className="info">
        <p className="animate__animated animate__slideInDown animate__delay-2s">Hi, my name is</p>
        <p className="animate__animated animate__slideInUp animate__delay-2s">Kyaw Min Tun.</p>
        <p className="animate__animated animate__slideInUp animate__delay-2s">I build things for the web.</p>
        <p className="animate__animated animate__slideInUp animate__delay-2s">I’m specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products.</p>
        <div className="cv-btn animate__animated animate__bounceInLeft animate__delay-2s">
            {/* <a href="#">Resume</a> */}
            <a href="assets/resume/KyawMinTun_CV.pdf" target="_blank" rel="noreferrer">Resume</a>
        </div>
    </section>
    )
}

export default Info;