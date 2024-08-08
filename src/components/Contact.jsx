

function Contact() {
    return(
        <section id="contact" className="my-contact" data-aos="fade-up">
            <h2 className="sec-title">Contact</h2>

        <div className="contact-sec">
            <div className="contact-info">
                <p>Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
                <ul className="address">
                    <li>Name: &nbsp;Kyaw Min Tun</li>
                    <li>Email: <a href="mailto:kyawmintun163948@gmail.com">kyawmintun163948@gmail.com</a></li>
                    <li>Phone: <a href="tel:09794144487">+95 979-414-4487</a></li>
                    <li>Phone: <a href="tel:08917931747">+66 91-793-1747</a></li>
                </ul>
            </div>


            <form name="form-data" method="post" className="form" id="reset">
                <p>
                    <input type="text" name="Username" placeholder="full name" required/>
                    <input type="email" name="Email" placeholder="email address" required/>
                </p>
                <input type="text" name="Subject" placeholder="subject" required/>

                <textarea id="" cols="30" name="Message" rows="10" placeholder="Message" required></textarea>

                <div className="form-btn">
                    <input type="submit" name="submit" value="Send"/>
                </div>
            </form>
        </div>
    </section>
    );
}

export default Contact;