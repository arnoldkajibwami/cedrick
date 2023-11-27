import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contactform = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_sq1o55m', 'template_xbfkhab', form.current, 'grO4ykyx9mQeSMlui')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <>
            <form ref={form} onSubmit={sendEmail}>
                
            </form>


            <div ref={form} onSubmit={sendEmail} className="contact-form">
                <div className="row gy-4">
                    <div className="col-lg-12 form-group">
                        <input type="text" name="from_name" className="form-control" id="name" placeholder='Your Name' />
                    </div>
                    <div className="col-lg-12 form-group mb-4">
                        <input type="email" name="from_email" className="form-control" id="email" placeholder="Your Email" />
                    </div>
                </div>
                <div className="form-group">
                    <textarea className="form-control mb-4" name="message" rows="5" placeholder="Message" />
                </div>
                <div className="text-center">
                    <input type="submit" value="Send" className='btn btn-danger w-100 subbtn' />
                </div>
            </div>
        </>
    );
};