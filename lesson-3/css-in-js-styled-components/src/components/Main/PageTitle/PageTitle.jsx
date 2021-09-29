import PropTypes from "prop-types";
import styled from "styled-components";

const Title = styled.p`
  font-weight: bold;
  font-size: 14px;
  line-height: 24px;
  text-align: right;
  letter-spacing: 1.25px;
  text-transform: uppercase;
  color: #010101;
  margin-bottom: 31px;
`;

const PageTitle = ({title}) => {
    return <Title>{ title }</Title>
};

export default PageTitle;

PageTitle.propTypes = {
    title: PropTypes.string.isRequired
}