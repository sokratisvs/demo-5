import React from "react";
import "./Services.css";

const ImageContent = (props) => {
    const { stat, percentage, i } = props;

    return (
        <div className="service-container">
            <div className="service-info">
                <div className="service-title">{stat.title}</div>
                <div className="progress-bar">
                    <div className="filler" id={`filler-${i}`} style={{ width: `${percentage}%` }}>
                    </div>
                </div>
            </div>
            <div className="service-percentage">{`${percentage}%`}</div>
        </div>
    );
};

export default ImageContent;