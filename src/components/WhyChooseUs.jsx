import "../styles/WhyChooseUs.css";

export default function WhyChooseUs() {
  const features = [
    "99.9% Uptime with web acceleration. Caching and compression enabled High-Traffic Websites & Apps development service to scale up sales and support hundreds of thousands of users in a fast, reliable manner.",
    "Clear terms and conditions, Robust data security to protect your customers' information. Providing Complete Ownership and Control your project. No Fake Commitment, Delivery on time",
    "Free Website Audit, Quick Review, 24x7 tech support. Easy to use complete Website Application end-to-end Analytics With Accelerated Mobile Pages (AMP)",
    "Use of Latest technologies like React Web Development, Vue JS Web Development, NodeJS Web Developers for web development & Website design service in India.",
    "Website UX Ui Design, Wireframing, Prototyping in figma before actually developing the webpages to make sure we're heading towards the right direction.",
  ];

  return (
    <section className="why-section">
      <div className="why-container">

        <div className="why-grid">

          {/* LEFT SIDE */}
          <div className="why-left">
            <h2 className="why-heading">WE ARE KNOW FOR</h2>

            {features.map((feature, index) => (
              <div key={index} className="why-item">
                <span className="check-icon">✓</span>
                <p>{feature}</p>
              </div>
            ))}

            <button className="why-btn">
              CALL NOW →
            </button>
          </div>

          {/* RIGHT SIDE */}
          <div className="why-right">
            <div className="image-wrapper">
              <img
                src="/why.jpg"
                alt="Why Choose Us"
                className="why-image"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}