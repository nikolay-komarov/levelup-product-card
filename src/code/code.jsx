import styled from "styled-components";

export const Code = styled.span.attrs((props) => ({
  children: `Артикул: ${props.children}`
}))`
  color: #888;
  font-size: 12px;
`;
