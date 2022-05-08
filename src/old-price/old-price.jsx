import styled from "styled-components";

export const OldPrice = styled.del.attrs((props) => ({
  children: `{value} ₽`
}))`
  font-size: 18px;
  color: #888;
  line-height: 1;
`;
