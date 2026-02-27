'use client';

import { useState } from 'react';
import '../styles/FAQ.css';

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        { question: 'How much does a website consultant cost?' },
        { question: 'How much should I pay for website design?' },
        { question: 'How much does a small website cost?' },
        { question: 'How much does a basic 5 page website cost?' },
        { question: 'How long does a website take to build?' },
        { question: 'Is maintaining the website is costly?' },
    ];

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="faq-section">
            <div className="faq-container">

                <div className="faq-header">
                    <h2 className="faq-heading">
                        FREQUENTLY ASKED <span>QUESTION</span>
                    </h2>
                    <p className="faq-subtitle">
                        Here are some common queries and question that brands ask.
                    </p>
                </div>

                <div className="faq-grid">
                    {faqs.map((faq, index) => (
                        <div key={index} className="faq-card">
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="faq-question"
                            >
                                <span>{faq.question}</span>
                                <span className="faq-icon">
                                    {openIndex === index ? '−' : '+'}
                                </span>
                            </button>

                            {openIndex === index && (
                                <div className="faq-answer">
                                    <p>
                                        Answer content goes here. You can add your real FAQ answers here.
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="faq-cta">
                    <h3>Got More Questions On Your Mind?</h3>
                    <button className="faq-btn">
                        Ask Us a question →
                    </button>
                </div>

            </div>
        </section>
    );
}