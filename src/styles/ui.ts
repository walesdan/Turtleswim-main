import { css } from "styled-components";

export const hideScroll = css`
  /* Safari, Chrome */
  &::-webkit-scrollbar {
    display: none;
    width: 0;
  }
  /* Firefox */
  scrollbar-width: none;
`;
