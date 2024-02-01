import "./Homepage.css";
import PropTypes from "prop-types";

export default function Homepage({ cats, loading }) {
    return <section id="homepage"></section>;
}

Homepage.propTypes = {
    cats: PropTypes.array,
    loading: PropTypes.bool,
};
