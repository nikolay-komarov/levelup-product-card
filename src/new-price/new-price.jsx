import styled from "styled-components";

export const NewPrice = styled.span.attrs((props) => ({
  children: `${props.value} ₽`
}))`
  font-size: 28px;
  font-weight: bold;
  line-height: 1;
`;
