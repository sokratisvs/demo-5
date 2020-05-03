import React from "react";
import ServiceProgress from './ServiceProgress';
import "./Services.css";

const Services = (props) => {
    const { content } = props;

    return (
        <div className="services-section">
            {content && (
                <>
                    <div className="services-header">
                        {content.title}
                    </div>
                    <div className="services-subtitle">
                        {content.graphText}
                    </div>
                    {content.stats && content.stats.map((stat, i) => {
                        const percentage = (stat.amount / 1000) * 100;
                        return <ServiceProgress stat={stat} percentage={percentage} i={i} />
                    })}
                </>
            )}
        </div>
    );
};

export default Services;