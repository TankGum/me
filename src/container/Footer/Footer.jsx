import React from "react"

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";

import './Footer.scss'
import { useState } from "react";

function Footer() { 
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [isFormSubmitted, setIsFormSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)

    const { name, email, message } = formData

    const handleChangeInput = (e) => {
        const { name, value } = e.target

        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = () => {
        setLoading(true)

        const contact = {
            _type: 'contact',
            name: 'name',
            email: 'email',
            message: 'message',
        }

        client.create(contact)
            .then(() => {
                setLoading(false)
                setIsFormSubmitted(true)
            })
    }

    return (
        <>
            <h2 className="head-text">Let me know if you have any questions</h2>

            <div className="app__footer-cards">
                <div className="app__footer-card">
                    <img src={images.email} alt='email' />
                    <a href="mailto:tankgum99@outlook.com" className="p-text">mail to: trantienanh99@outlook.com</a>
                </div>
                <div className="app__footer-card">
                    <img src={images.mobile} alt='mobile' />
                    <a href="tel: +84 388102842" className="p-text">tel: +84 388102842</a>
                </div>
            </div>

            {!isFormSubmitted ? 
            <div className="app__footer-form app__flex">
                <div className="app__flex">
                    <input 
                        className="p-text" 
                        type='text' 
                        name="name" 
                        placeholder="Your name" 
                        value={name} 
                        onChange={handleChangeInput} 
                    />
                </div>
                <div className="app__flex">
                    <input 
                        className="p-text" 
                        type='email' 
                        name="email" 
                        placeholder="Your email" 
                        value={email} 
                        onChange={handleChangeInput} 
                    />
                </div>
                <div>
                    <textarea 
                        className="p-text"
                        placeholder="Your message"
                        value={message}
                        name={message}
                        onChange={handleChangeInput}
                    />
                </div>
                <button className="p-text" onClick={handleSubmit}>{loading ? 'Sending' : 'Send Message'}</button>
            </div>
            : <div className="head-text">Thank you </div>}
        </>
    )
}

export default AppWrap(
    MotionWrap(Footer, 'app__footer'),
    'contact',
    'app__whitebg'
);