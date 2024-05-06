import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactUs.css';
// import Navbar from '../Navbar';

const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_ve4fdve', 'template_gprs12a', form.current, {
                publicKey: 'O6Bd4yL3No7ioKAx7',
            })
            .then(
                () => {
                    alert('Your message has been sent successfully!'); // Display success message
                    form.current.reset(); // Clear the form fields
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <>
            <div id='ContactUs' className='Up'>
                {/* <Navbar /> */}
                <div className="github-theme-background">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-11">
                                <div className="side card custom-card p-4 shadow d-flex flex-row">
                                    <div className=" side-side1  card-body">
                                        <h2 className="card-title mb-4">Contact Us</h2>
                                        <form ref={form} onSubmit={sendEmail}>
                                            <div className="form-group mb-3">
                                                <label htmlFor="from_name" className="form-label">Name</label>
                                                <input type="text" className="form-control" id="from_name" name="from_name" required />
                                            </div>
                                            <div className="form-group mb-3">
                                                <label htmlFor="from_email" className="form-label">Email</label>
                                                <input type="email" className="form-control" id="from_email" name="from_email" required />
                                            </div>
                                            <div className="form-group mb-3">
                                                <label htmlFor="message" className="form-label">Message</label>
                                                <textarea className="form-control" id="message" name="message" rows="4" required></textarea>
                                            </div>
                                            <div className="d-grid">
                                                <button type="submit" className="btn btn-dark btn-lg">Send</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className='side2'>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactUs;