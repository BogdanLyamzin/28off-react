import styled from "styled-components";

export const Item = styled.li`
  margin-bottom: 24px;
`;

export const Link = styled.a`
  font-weight: bold;
  font-size: 14px;
  line-height: 24px;
  color: ${(props) => (props.active ? "#ff6b0a" : "#010101")};
  letter-spacing: 1.25px;
  text-decoration: none;
  text-transform: uppercase;
  display: flex;
  align-items: baseline;
  :hover {
    color: #ff6b0a;
  }
`;
