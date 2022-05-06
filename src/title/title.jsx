import styled from "styled-components";

export const Title = styled.h1`
  padding: 0;
  margin: 0;
  font-size: ${(props) => (props.small ? 20 : 34)}px;
`;
