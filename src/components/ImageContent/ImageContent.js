import React from "react";
import "./ImageContent.css";

const ImageContent = (props) => {
    const { content } = props;

    return (
        <div className="image-section">
            {content && content.images && content.images.map((image) => (
                <div className="container" key={image.id}>
                    <img src={image.img} alt={image.title} className="image" />
                    <div className="overlay">
                        <div className="image-overlay-text">{image.title}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ImageContent;