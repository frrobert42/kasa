import "./banner.scss";
import PropTypes from "prop-types";

export default function Banner({title, imageClassName}) {
    return (
        <div id={"banner"} className={imageClassName}>
            {title && <h1>{title}</h1>}
        </div>
);
}

Banner.propTypes = {
    title: PropTypes.string,
    imageClassName: PropTypes.string.isRequired
};
