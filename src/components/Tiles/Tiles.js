import React from "react";
import "./Tiles.css";

const Tiles = (props) => {
    const { tiles } = props;

    return (
        <div className="tiles-section">
            {tiles && tiles.map((tile) => (
                <div className="tile-container" key={tile.icon}>
                    <img src={tile.icon} alt={tile.icon} className="tile" />
                    <div className="title">{tile.title}</div>
                    <div className="text">{tile.description}</div>
                    <a href='#' className="link">{tile.link} ></a>
                    <div className="tile-overlay">
                        <div className="overlay-title">{tile.title}</div>
                        <div className="overlay-text">{tile.description}</div>
                        <a href='#' className="overlay-link">{tile.link} ></a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Tiles;