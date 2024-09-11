import { useState } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

function Contact() {
    const [formData, setFormData] = useState({
        name: '', 
        email:'', 
        subject: '', 
        message:''
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {

        e.preventDefault();

        emailjs.send(
            "service_ayif3fj",
            "template_2r0jywr",
            formData,
            'gGhpRCOC2fzTEJgO0'
    
        ).then((result) => {
            
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Thanks for Contacting me..! I Will Contact You Soon...',
                confirmButtonColor: '#3085d6'
            });
    
          }, (error) => {
    
            alert('Failed to send message');
    
        });
        
    }




    return(
        <section id="contact" className="my-contact"  data-aos-delay="500" data-aos="fade-up" data-aos-duration="3000">
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


                <form onSubmit={handleSubmit} className="form" id="reset">
                    <p>
                        <input type="text" autoComplete='on' name="name" placeholder="full name" onChange={handleChange} required/>
                        <input type="email" autoComplete='on' name="email" placeholder="email address" onChange={handleChange} required/>
                    </p>
                    <input type="text" name="subject" placeholder="subject" onChange={handleChange} required/>

                    <textarea name="message" id="" cols="30" rows="10" placeholder="Message" onChange={handleChange} required></textarea>

                    <div className="form-btn">
                        <input type="submit" value="Send"/>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contact;