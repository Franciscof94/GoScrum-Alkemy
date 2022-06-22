import styled from "styled-components";
import Screen from "../../Screen/Screen";

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--purple-color);
  padding: 0.7rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1320px;
    width: 100%;

    a {
      img {
        height: 30px;
        width: 100%;
        ${Screen.sm`
      height: 45px;
    `};
      }
    }

    div:last-child {
      display: flex;
      align-items: center;
      a {
        padding: 0.5rem;
        cursor: pointer;
        font-weight: bold;
        text-decoration: none;
        color: black;
      }
      div {
        cursor: pointer;
        padding: 0.5rem;
      }
    }
  }
`;
