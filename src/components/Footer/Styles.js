import styled from "styled-components";
import Screen from "../../Screen/Screen";

export const Wrapper = styled.section`
  background-color: var(--purple-color-10);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

    > div:first-child {
      margin: 3rem 0;
      display: flex;
      justify-content: space-between;
      max-width: 280px;
      width: 100%;
      ${Screen.sm`
      max-width: 350px;
        `}
      a{
        filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));
        cursor: pointer;
        transition: transform .4s;
      }
      a:hover {
        transform: scale(1.2)
      }
    }
    > div:last-child {
      font-weight: bold;
      margin-bottom: 1.2rem;
      font-size: 0.7rem;
      ${Screen.sm`
      font-size: 0.8rem;
      margin-bottom: 1.8rem;
        `}
    }
`;
