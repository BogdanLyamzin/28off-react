import PropTypes from "prop-types";

import "./PageTitle.css";

const style = {
    fontWeight: "bold",
    fontSize: "14px",
    lineHeight: "24px",
    textAlign: "right",
    letterSpacing: "1.25px",
    textTransform: "uppercase",
    color: "#010101",
    marginBottom: "31px"
}

const PageTitle = ({title}) => {
    return <h2 style={style}>{ title }</h2>
};

export default PageTitle;

PageTitle.propTypes = {
    title: PropTypes.string.isRequired
}