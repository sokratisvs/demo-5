import React from "react";
import Slide from './Slide';
import Dots from './Dots'
import Menu from '../Menu/Menu';
import SearchBar from '../SearchBar/SearchBar';
import { SLIDER_API_URL } from "../../constants";
import "./Slider.css";

class Slider extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            translate: 0,
            transition: 0.45,
            slides: [],
        };
        this.getWidth = this.getWidth.bind(this);
        this.prevSlide = this.prevSlide.bind(this);
        this.nextSlide = this.nextSlide.bind(this);
        this.determinePrevOrNextHandler = this.determinePrevOrNextHandler.bind(this);
    }

    getWidth = () => window.innerWidth;

    componentDidMount() {
        fetch(SLIDER_API_URL, {
            method: "GET",
        })
            .then((response) => response.json())
            .then((data) => {
                this.setState({ slides: [...data] });
            });
    }

    determinePrevOrNextHandler = (i) => {
        const { activeIndex } = this.state;
        return i < activeIndex ? (i) => this.prevSlide(i) : (i) => this.nextSlide(i);
    }

    nextSlide = (i) => {
        const { activeIndex, slides } = this.state;
        if (activeIndex === slides.length - 1) {
            return this.setState({
                ...this.state,
                translate: 0,
                activeIndex: 0
            })
        }

        this.setState({
            ...this.state,
            activeIndex: activeIndex + (i - activeIndex),
            translate: (activeIndex + (i - activeIndex)) * this.getWidth()
        })
    }

    prevSlide = (i) => {
        const { activeIndex, slides } = this.state;
        if (activeIndex === 0) {
            return this.setState({
                ...this.state,
                translate: (slides.length - 1) * this.getWidth(),
                activeIndex: slides.length - 1
            })
        }

        this.setState({
            ...this.state,
            activeIndex: activeIndex - (activeIndex - i),
            translate: (activeIndex - (activeIndex - i)) * this.getWidth()
        })
    }

    render() {
        const { transition, activeIndex, slides } = this.state;
        return (
            <div className="slider">
                <div className="slide-content">
                    {slides && slides.map((slide, i) => {
                        return (
                            <Slide
                                key={slide + i}
                                content={slide}
                                activeIndex={activeIndex}
                                i={i}
                                transition={transition}
                            />
                        )
                    })}
                </div>
                <Menu />
                <SearchBar />
                <Dots
                    slides={slides}
                    activeIndex={activeIndex}
                    handleClick={this.determinePrevOrNextHandler}
                />
            </div>
        )
    }
}

export default Slider;