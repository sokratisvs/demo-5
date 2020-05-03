import React from 'react'

const Dot = ({ active, i, onhandleClick }) => (
    <span
        className="dot"
        style={{
            background: `${active ? '#1292ee' : '#404859'}`,
        }}
        onClick={() => onhandleClick(i)}
    />
)

const Dots = ({ slides, activeIndex, handleClick }) => (
    <div className="dots">
        {slides.map((slide, i) => (
            <Dot key={slide.title} active={activeIndex === i} i={i} onhandleClick={handleClick(i)} />
        ))}
    </div>
)

export default Dots