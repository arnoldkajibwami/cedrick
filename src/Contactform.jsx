import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const Contactform = () => {
    const form = useRef();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);


    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true)

        emailjs.sendForm('service_ig1ehv7', 'template_smq6tdu', form.current, 'WcElLXJcAAgyN31No')
            .then((result) => {
                console.log(result.text);
                alert("message sent");
                setName("");
                setEmail("");
                setMessage("");
                setIsLoading(false);
                
            }, (error) => {
                setIsLoading(false);
                alert.error("Message not sent! Erreur")
            });
    };

    return (
        <>
            <form ref={form} onSubmit={sendEmail}>
            <div  className="contact-form">
                <div className="row gy-4">
                    <div className="col-lg-12 form-group">
                        <input value={name} onChange={(e)=>setName(e.target.value)} type="text" name="from_name" className="form-control" id="name" placeholder='Votre Nom' />
                    </div>
                    <div className="col-lg-12 form-group mb-4">
                        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" name="from_email" className="form-control" id="email" placeholder="Email" />
                    </div>
                </div>
                <div className="form-group">
                    <textarea value={message} onChange={(e)=>setMessage(e.target.value)} className="form-control mb-4" name="message" rows="5" placeholder="Message" />
                </div>
                <div className="text-center">
                    <input disabled={isLoading} type="submit" value={isLoading ? "en cour d'envoi ..." : "Envoyer"} className='btn btn-danger w-100 subbtn' />
                </div>
            </div>
            </form>
        </>
    );
};