import React, { useState } from "react";
import "./Contact.css";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Social icons for visual appeal

const Contact = ({ isDarkMode }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simple validation
        const validationErrors = {};
        if (!formData.name) validationErrors.name = "Name is required.";
        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) validationErrors.email = "Valid email is required.";
        if (!formData.message) validationErrors.message = "Message is required.";
        
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            // Simulate successful form submission
            setIsSubmitted(true);
            setFormData({ name: "", email: "", message: "" });
        }
    };

    return (
        <section id="contact" className={`contact ${isDarkMode ? "dark" : ""}`}>
            <h1>Contact Me</h1>
            <p>I'd love to hear from you! Drop me a message, and I'll get back to you as soon as I can.</p>

            {isSubmitted && <div className="success-message">Your message has been sent!</div>}

            <form className="contact-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className={errors.name ? "error" : ""}
                />
                {errors.name && <p className="error-message">{errors.name}</p>}

                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className={errors.email ? "error" : ""}
                />
                {errors.email && <p className="error-message">{errors.email}</p>}

                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows="5"
                    className={errors.message ? "error" : ""}
                />
                {errors.message && <p className="error-message">{errors.message}</p>}

                <button type="submit">Send Message</button>
            </form>

            <div className="social-links">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                </a>
            </div>
        </section>
    );
};

export default Contact;
