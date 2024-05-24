'use client';
import "./carousel.scss";
import {useState} from "react";
import previous from "../../assets/img/previous.svg";
import next from "../../assets/img/next.png";
import PropTypes from "prop-types";

export default function Carousel({images}) {
    const [index, setIndex] = useState(0);
    const length = images?.length;

    const handlePrevious = () => {
        const newIndex = index - 1;
        setIndex(newIndex < 0 ? length - 1 : newIndex);
    };

    const handleNext = () => {
        const newIndex = index + 1;
        setIndex(newIndex >= length ? 0 : newIndex);
    };

    console.log(images);
    return (
        <>
            <div className="carousel" style={{backgroundImage: `url(${images[index]})`}}>
                <button onClick={handlePrevious}>
                    <img src={previous || undefined} alt={"previous"}/>
                </button>
                <button onClick={handleNext}>
                    <img src={next || undefined} alt={"next"}/>
                </button>
            </div>
            <span className={"carousel-index"}>{index+1} / {images.length}</span>
        </>
    );
}

Carousel.propTypes = {
    images: PropTypes.array.isRequired,
};
