import React from 'react'

const Slide = (props) => {
    const { content, activeIndex, i, transition } = props;
    const opacity = i === activeIndex ? '1' : '0';
    return (
        <div
            style={{
                position: `absolute`,
                height: `100%`,
                width: `100%`,
                backgroundImage: `url(${content.image})`,
                backgroundSize: `cover`,
                backgroundRepeat: `no-repeat`,
                backgroundPosition: `center`,
                opacity,
                transition: `opacity ease-in-out ${transition}s`,
            }}
        >
            <div
                style={{
                    position: `absolute`,
                    width: `100%`,
                    display: `flex`,
                    top: '100px',
                    justifyContent: `center`,
                    color: `white`,
                    fontSize: '52px',
                    height: `100%`,
                    opacity,
                    transition: `opacity ease-in-out ${transition}s`,
                }}
            >{content.title}</div>
            <div
                style={{
                    position: `absolute`,
                    width: `100%`,
                    display: `flex`,
                    top: '200px',
                    justifyContent: `center`,
                    color: `white`,
                    fontSize: '22px',
                    height: `100%`,
                    opacity,
                    transition: `opacity ease-in-out ${transition}s`,
                }}
            >{content.subtitle}</div>
        </div>
    )
}

export default Slide