import "../styles/About.css";

export default function About() {
  const features = [
    {
      title: "Great UI / UX",
      description:
        "Our designs have great UI which results in great UX as well.",
    },
    {
      title: "SEO Friendly",
      description:
        "Our websites are built with features to help your website rank higher.",
    },
    {
      title: "Clean Coding",
      description:
        "Coding is kept clean and optimised as per industry standard.",
    },
    {
      title: "Responsive Design",
      description:
        "Our Designs are device friendly across all platforms and screen sizes.",
    },
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">

        {/* Faded Background Text */}
        <div className="about-bg-text">
          <p>ABOUT US</p>
        </div>

        <div className="about-grid">

          {/* Left Content */}
          <div className="about-left">
            <h2>
              Hire Top Website <br /> Designers & Developers
            </h2>

            <p>
              If you're looking to hire expert website designers and developers,
              you've come to the right place to construct a website that stands
              out in aesthetics and functionality. We have the ability to offer
              a wide range of services. As we have a comprehensive understanding
              of website design and exposure across sectors all over the world,
              we also build websites that provide customers with the best first
              impression on digital platforms. Here's what we look for when
              hiring web designers to revitalize your company's online presence.
            </p>

            <button className="about-btn">QUICK ENQUIRY</button>
          </div>

          {/* Right Features */}
          <div className="about-features">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}