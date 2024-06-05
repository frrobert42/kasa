import "./tag.scss";
import PropTypes from "prop-types";

function Tag(props) {
  return (
      <button className={"tag"}>
            {props.name}
      </button>
  )
}

Tag.propTypes = {
    name: PropTypes.string.isRequired
};

export default Tag;
