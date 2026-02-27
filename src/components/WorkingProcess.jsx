import "../styles/WorkingProcess.css";

export default function WorkingProcess() {
    const steps = [
        { number: "01", title: "We Get Your Requirements", color: "dark", icon: "📋" },
        { number: "02", title: "Market Research & Feasibility Analysis", color: "orange", icon: "📊" },
        { number: "03", title: "Designing & Get Confirmation", color: "red", icon: "✏️" },
        { number: "04", title: "Coding & Development", color: "teal", icon: "💻" },
        { number: "05", title: "Testing & Maintenance", color: "blue", icon: "✓" },
    ];

    return (
        <section className="process-section">
            <div className="process-container">

                <h2 className="process-heading">OUR WORKING PROCESS</h2>

                <div className="process-grid">
                    {steps.map((step, index) => (
                        <div key={index} className="process-step">

                            {/* TOP TEXT for 0,2,4 */}
                            {index % 2 === 0 && (
                                <>
                                    <h4 className="step-title top">{step.title}</h4>
                                    <p className={`step-label top ${step.color}-text`}>
                                        Step {step.number}
                                    </p>
                                </>
                            )}

                            <div className="circle-wrapper">

                                <div className={`rotating-ring ${step.color}`}></div>

                                <div className={`main-circle ${step.color}`}>
                                    <span className="icon">{step.icon}</span>
                                </div>

                                {/* Arrow toward text */}
                                <div
                                    className={`arrow ${index % 2 === 0 ? "arrow-top" : "arrow-bottom"} ${step.color}`}
                                ></div>

                                <div className={`vertical-line ${step.color}`}></div>
                                <div className={`dot ${step.color}`}></div>

                            </div>

                            {/* BOTTOM TEXT for 1,3 */}
                            {index % 2 !== 0 && (
                                <>
                                    <p className={`step-label bottom ${step.color}-text`}>
                                        Step {step.number}
                                    </p>
                                    <h4 className="step-title bottom">{step.title}</h4>
                                </>
                            )}

                        </div>
                    ))}
                </div>

                <div className="process-buttons">
                    <button className="btn-dark">QUICK ENQUIRY</button>
                    <button className="btn-blue">📞 9045301702</button>
                </div>

            </div>
        </section>
    );
}