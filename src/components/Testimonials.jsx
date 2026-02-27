import { useState } from "react";
import "../styles/Testimonials.css";

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            name: "Harriet Mitchell",
            title: "Director of inbrew",
            text: "Lorem ipsum is simply dummy text of the printing & Typesetting industry. lorem ipsum has been the industry's standard dummy text ever since the 1500s, an unknown printer took a gallery.",
            image: "/profile.jpg", // keep your image inside public folder
            videoImage: "/testimonial.jpg", // right side big image
        },
    ];

    const nextSlide = () =>
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);

    const prevSlide = () =>
        setCurrentIndex((prev) =>
            (prev - 1 + testimonials.length) % testimonials.length
        );

    return (
        <section id="testimonials" className="testimonial-section">
            <div className="testimonial-container">

                <div className="testimonial-header">
                    <p className="small-heading">TESTIMONIALS</p>
                    <h2>OUR HAPPY CLIENT SAY</h2>
                </div>

                <div className="testimonial-grid">

                    {/* LEFT SIDE */}
                    <div className="testimonial-left">

                        <div className="profile-row">
                            <img
                                src={testimonials[currentIndex].image}
                                alt="client"
                                className="profile-img"
                            />

                            <div className="arrow-group">
                                <button onClick={prevSlide} className="arrow gray">←</button>
                                <button onClick={nextSlide} className="arrow blue">→</button>
                            </div>
                        </div>

                        <p className="testimonial-text">
                            {testimonials[currentIndex].text}
                        </p>

                        <div className="client-info">
                            <h4>{testimonials[currentIndex].name}</h4>
                            <p>{testimonials[currentIndex].title}</p>
                        </div>

                    </div>

                    {/* RIGHT SIDE */}
                    <div className="testimonial-right">
                        <img
                            src={testimonials[currentIndex].videoImage}
                            alt="testimonial"
                            className="video-img"
                        />

                        <div className="play-button">▶</div>

                        <div className="testimonial-dots">
                            <span className="testimonial-dot active"></span>
                            <span className="testimonial-dot"></span>
                            <span className="testimonial-dot"></span>
                            <span className="testimonial-dot"></span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}