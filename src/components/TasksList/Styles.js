import styled from "styled-components";
import Screen from "../../Screen/Screen";

export const Wrapper = styled.section`
  background-color: #c3c3e5;
  border-top-right-radius: 20rem;
  border-top-left-radius: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin: 3rem auto 1.3rem auto;
    font-size: 2rem;
    ${Screen.sm`
    margin: 1.3rem auto;
      `}
  }

  > div {
    > div:first-child {
      display: flex;
      flex-direction: column;
      align-items: center;
      ${Screen.sm`
      margin-bottom: 3rem;
      `}
      
      input {
        border: none;
        outline: none;
        border-radius: 0.4rem;
        padding: 0.6rem;
        ${Screen.sm`
        margin-right: 0.5rem;
        `}
      }
      > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        ${Screen.sm`
          flex-direction: row
        `}
      }
    }
    > div:last-child {
  

      ${Screen.md`
      display: grid;
      grid-template-columns: minmax(150px, 400px) minmax(150px, 400px) minmax(150px, 400px);
        `}
      > div {
        width: 100%;
        text-align: center;
        min-height: 30vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        > h3 {
          font-size: 2rem;
          margin: 1.8rem 0;
        }
        > div {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          max-height: 65vh;
          overflow: auto;
        }
      }
    }
  }
`;

export const LoaderContainer = styled.div``;

export const CardsContainer = styled.div``;
