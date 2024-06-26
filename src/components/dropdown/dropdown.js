import "./dropdown.scss";
import PropTypes from "prop-types";
import {useState} from "react";
import arrow from "../../assets/img/arrow.svg";

function Dropdown(props) {
    const [show, setShow] = useState(false);
    const { name, text, utility } = props;

    function showContent() {
       setShow(!show);
       const arrow = document.querySelector(".arrow" + name);
        // Rotate arrow
        if (show) arrow.style.transform = "rotate(0deg)";
        else arrow.style.transform = "rotate(-180deg)";
    }

    return (
        <div className={"dropdown"}>
            <button onClick={() => showContent()} className={"dropdown"}>
                <p>{name}</p>
                <img src={arrow || undefined} alt={"arrow"} className={"arrow" + name}/>
            </button>
            {!utility &&
                <p id={name} className={"dropdown-text " + show}>{text}</p>
            }
            {utility &&
                <ul id={name} className={"dropdown-text " + show}>
                    {utility.map((item, index) => (
                        <li key={"utility-" + index}>{item}</li>
                    ))}
                </ul>
            }
        </div>
    );
}

Dropdown.propTypes = {
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    utility: PropTypes.array
};

export default Dropdown;
