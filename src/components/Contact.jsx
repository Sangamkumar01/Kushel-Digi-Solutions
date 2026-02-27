'use client';

import { useState } from 'react';
import '../styles/Contact.css';

export default function Contact() {
    const [tab, setTab] = useState('address');
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        location: '',
        business: '',
        message: '',
        recaptcha: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.recaptcha) {
            alert("Please verify that you're not a robot");
            return;
        }
        console.log('Contact submitted:', formData);
    };

    return (
        <section id="contact" className="contact-section">

            {/* CTA */}
            {/* <div className="contact-cta">
                <div className="contact-container center">
                    <h2>Get Free Consultation</h2>
                    <p>Book An Appointment With Our Team Through Google Meet / Zoom Call</p>
                    <button className="cta-btn">Schedule a meeting →</button>
                </div>
            </div> */}

            {/* Contact Area */}
            <div className="contact-main">
                <div className="contact-container">
                    <div className="contact-grid">

                        {/* Left - Form */}
                        <div className="contact-left">
                            <h2>Contact Us</h2>
                            <p>Please Complete The Below Form. We Will Get In Touch With You</p>

                            <form onSubmit={handleSubmit} className="contact-form">

                                <div className="two-col">
                                    <input type="text" name="name" placeholder="Name*" value={formData.name} onChange={handleChange} required />
                                    <input type="tel" name="phone" placeholder="Phone Number*" value={formData.phone} onChange={handleChange} required />
                                </div>

                                <div className="two-col">
                                    <input type="email" name="email" placeholder="Email Address*" value={formData.email} onChange={handleChange} required />
                                    <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} />
                                </div>

                                <input type="text" name="business" placeholder="Business Name" value={formData.business} onChange={handleChange} />

                                <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange}></textarea>

                                <div className="recaptcha-box">
                                    <div className="recaptcha-left">
                                        <input type="checkbox" name="recaptcha" checked={formData.recaptcha} onChange={handleChange} />
                                        <label>I'm Not A Robot</label>
                                    </div>
                                    <div className="recaptcha-right">
                                        <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" />
                                        <p>reCAPTCHA</p>
                                    </div>
                                </div>

                                <button type="submit" className="submit-btn">Submit</button>
                            </form>
                        </div>

                        {/* Right - Info */}
                        <div className="contact-right">
                            <div className="tabs">
                                <button
                                    className={tab === 'address' ? 'active' : ''}
                                    onClick={() => setTab('address')}
                                >
                                    Address
                                </button>
                                <button
                                    className={tab === 'maps' ? 'active' : ''}
                                    onClick={() => setTab('maps')}
                                >
                                    Google Maps
                                </button>
                            </div>

                            {tab === 'address' && (
                                <div className="info-box">

                                    <div class="info-item">
                                        <div class="icon">
                                            <svg viewBox="0 0 24 24">
                                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4>OUR LOCATION</h4>
                                            <p>G-9, First Floor, Sector 63, Noida</p>
                                        </div>
                                    </div>

                                    <div class="info-item">
                                        <div class="icon">
                                            <svg viewBox="0 0 24 24">
                                                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4>SEND US MAIL</h4>
                                            <p>Info@Kusheldigi.Com</p>
                                        </div>
                                    </div>

                                    <div class="info-item">
                                        <div class="icon">
                                            <svg viewBox="0 0 24 24">
                                                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24a11.72 11.72 0 003.7.59c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.07 21 3 13.93 3 5c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.28.21 2.51.59 3.7.11.35.03.74-.25 1.02l-2.22 2.07z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4>CALL US</h4>
                                            <p>+91 9045301702</p>
                                        </div>
                                    </div>

                                </div>
                            )}

                            {tab === 'maps' && (
                                <div className="map-placeholder"></div>
                            )}

                        </div>

                    </div>
                </div>
            </div>

        </section>
    );
}