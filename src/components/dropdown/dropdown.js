import "./dropdown.scss";
import PropTypes from "prop-types";
import {useState} from "react";

function Dropdown(props) {
    const [show, setShow] = useState(false);
    const { name, text } = props;

    function showContent() {
       setShow(!show);
    }

    return (
        <div className={"dropdown"}>
            <button onClick={() => showContent()} className={"dropdown"}>
                <p>{name}</p>
            </button>
            {show &&
                <p className={"dropdown-text"}>{text}</p>
            }
        </div>
    );
}

Dropdown.propTypes = {
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default Dropdown;
