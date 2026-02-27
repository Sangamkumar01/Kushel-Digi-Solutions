import { FaUser, FaPhone, FaEnvelope, FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import "../styles/Hero.css";

export default function Hero() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    services: "",
    budget: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-grid">

          {/* Left Content */}
          <div className="hero-left">
            <p className="hero-subtitle">Welcome to Kushel Digi</p>

            <h1 className="hero-title">
              Revolutionising your business through Technology.
            </h1>

            <p className="hero-description">
              We are a leading company, which has been offering technology
              solutions across the globe for almost 5 years.
            </p>

            <div className="hero-buttons">
              <button className="btn-dark">QUICK ENQUIRY</button>
              <button className="btn-blue">📞 9045301702</button>
            </div>

            <div className="hero-services">
              <p>• UI/UX DESIGN</p>
              <p>• WEBSITE & APP DEVELOPMENT</p>
              <p>• E-COMMERCE DEVELOPMENT</p>
            </div>
          </div>

          {/* Right Form */}
          <div className="hero-card">
            <h3>Hire A Top Global Talent To Grow Your Business !</h3>
            <p className="card-subtitle">Get Free Quote</p>

            <form onSubmit={handleSubmit}>
              <div className="form-row">

  <div className="input-group">
    <FaUser className="input-icon" />
    <input
      type="text"
      name="name"
      placeholder="Your Name*"
      onChange={handleChange}
    />
  </div>

  <div className="input-group">
    <FaPhone className="input-icon" />
    <input
      type="tel"
      name="phone"
      placeholder="Phone Number*"
      onChange={handleChange}
    />
  </div>

</div>

<div className="form-row">

  <div className="input-group">
    <FaEnvelope className="input-icon" />
    <input
      type="email"
      name="email"
      placeholder="Email Address"
      onChange={handleChange}
    />
  </div>

  <div className="input-group select-group">
    <select name="services" onChange={handleChange}>
      <option value="">Services</option>
      <option value="web">Web Development</option>
      <option value="app">App Development</option>
      <option value="design">Design</option>
    </select>
    <FaChevronDown className="select-icon" />
  </div>

</div>

              <h4>Additional Details</h4>

              <div className="form-row">
                <select name="budget" onChange={handleChange}>
                  <option value="">Select Budget</option>
                  <option value="under-10k">Under $10K</option>
                  <option value="10k-50k">$10K - $50K</option>
                  <option value="50k+">$50K+</option>
                </select>

                <input
                  type="text"
                  name="date"
                  placeholder="Best Start Date"
                  onFocus={(e) => (e.target.type = "date")}
                  onBlur={(e) => {
                    if (!e.target.value) e.target.type = "text";
                  }}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="btn-submit">
                Send a Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}