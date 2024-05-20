'use client';
import "./carousel.scss";
import {useState} from "react";
import previous from "../../assets/img/previous.svg";
import next from "../../assets/img/next.png";

export default function Carousel({images}) {
    const [index, setIndex] = useState(0);
    const length = 3;

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
        <div className="carousel">
            <img onClick={handlePrevious}src={previous} alt="previous"/>
            <img src={images[index]} alt={"carousel"} width={"auto"} height={415}/>
            <img onClick={handleNext} src={next} alt="next"/>
        </div>
    );
}
