import React from 'react';
import '../../css_file/CardWithIcon.css';
// Import icons from a library like lucide-react
// import { Leaf, Droplets, Handshake } from 'lucide-react';

const CardWithIcon = () => {
    const values = [
        {
            title: "Sustainability",
            description: "Protecting our for future generations",
            icon: "🌱",
            className: "sustainability"
        },
        {
            title: "Quality",
            description: "Pure, wholesome dairy products",
            icon: "🥛",
            className: "quality"
        },
        {
            title: "Community",
            description: "Trusted local provider",
            icon: "🤝",
            className: "community"
        }
    ];

    return (
        <section className="core-values-section">
            <div className="container">
                <h2 className="section-title">Our Core Values</h2>

                <div className="values-grid">
                    {values.map((item, index) => (
                        <div key={index} className="value-card">
                            {/* Top colored bar */}
                            <div className={`card-header ${item.className}`}>
                                {/* Overlapping icon circle */}
                                <div className="icon-circle">
                                    {item.icon}
                                </div>
                            </div>

                            {/* Card content */}
                            <div className="card-body">
                                <p>
                                    <span className="value-title">{item.title}:</span>{" "}
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CardWithIcon;