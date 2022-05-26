import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import './_ContactUs.scss'

const Contact = () => {

	const form = useRef();

	const sendEmail = (e) => {
	  e.preventDefault();
  
	  emailjs.sendForm('service_fe7mp6u', 'template_or6p2dd', form.current, 'wf-jT_e3V56eH6Qa5')
		.then((result) => {
			console.log(result.text);
		}, (error) => {
			console.log(error.text);
		});
		e.target.reset();
	};

return (

	<div className="container contact-page">
		<h3>Är du intresserad av att snygga till ditt hem eller kontor? Eller vill du veta mer om våra tjänster?</h3>
		<form className="contact-form" ref={form} onSubmit={sendEmail}>
			{/* <label>Name</label> */}
			<input type="text" name="user_name" placeholder="Enter you name"/>
			{/* <label>Email</label> */}
			<input type="email" name="user_email" placeholder="Enter you Email"/>
			{/* <label>Message</label> */}
			<textarea name="message" placeholder="Tell me what you need"/>
			<input className="form-btn" type="submit" value="Send" />
  		</form>
	  </div>
	
);
};

export default Contact;
