import React from "react";
import "../styles/Portfolio.css";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const PortfolioCard = ({ image, url, description }) => {
    return (
        
        <div className="portfolio-card">
            <div className="portfolio-image-wrapper">
                <img src={image} alt={url} />
                <div className="portfolio-arrow">
                    <FaArrowRight />
                </div>
            </div>
            <div className="portfolio-content">
                <h3>{url}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

const PortfolioSection = () => {
    return (
        <section id="portfolio" className="portfolio-section">
            {/* Watermark */}
            <div className="portfolio-watermark">OUR PORTFOLIO</div>

            <div className="portfolio-container">
                {/* Heading */}
                <div className="portfolio-header">
                    <h2>OUR PORTFOLIO</h2>
                    <p>
                        We design project designed with passion on time,
                        within budget of full value
                    </p>
                </div>

                {/* Slider Navigation */}
                <div className="portfolio-nav left">
                    <FaChevronLeft />
                </div>

                <div className="portfolio-nav right">
                    <FaChevronRight />
                </div>

                {/* Cards */}
                <div className="portfolio-cards">
                    <PortfolioCard
                        image="https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=80"
                        url="www.2ndAmendment.com"
                        description="Lorem Ipsum is simply dummy"
                    />

                    <PortfolioCard
                        image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
                        url="www.kickeez.com"
                        description="Lorem Ipsum is simply dummy"
                    />
                </div>

                {/* Dots */}
                <div className="portfolio-dots">
                    <span className="active"></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

               
                <div className="portfolio-cta">
                    <button>Let’s Get Together →</button>
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;