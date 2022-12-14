import React from 'react';
import ContactForm from './ContactForm';

const ContactUs = () => {
    return (      
        <div className="main-contact-area ptb-100">
			<div className="container">
				<div className="section-title">
					<span className="top-title">Contact Us</span>
					<h2>Drop us a message for any query</h2>
					<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque quibusdam deleniti porro praesentium. Aliquam minus quisquam velit in at nam.</p>
				</div>

				<div className="row align-items-center">
					<div className="col-lg-6">
						<ContactForm />
					</div>

					<div className="col-lg-6">
						<div className="contact-img">
							<img src="/img/contact-img.png" alt="Image" />
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default ContactUs;