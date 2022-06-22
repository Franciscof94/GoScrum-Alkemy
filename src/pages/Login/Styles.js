import styled from "styled-components";
import Screen from "../../Screen/Screen";

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: var(--purple-color);
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--grey-color);
    border-radius: 0.4rem;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    padding: 1.5rem;

    ${Screen.sm`
      width: 400px;
      padding: 1.5rem
    `};

    > h1 {
      font-size: 1.7rem;
      color: rgb(32, 32, 32);
      font-weight: bold;
      margin-bottom: 1rem;
    }
    > div {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin-bottom: 0.7rem;
      label {
        font-size: 1rem;
        margin-bottom: 0.2rem;
        font-weight: 500;
      }
      input {
        border: none;
        outline: none;
        border-radius: 0.4rem;
        padding: 0.6rem;
      }
      small {
        display: flex;
        flex-direction: column;
        width: 100%;
        color: var(--error-color);
        font-weight: bold;
      }
    }
    span {
      ${"" /* margin: 1.5rem 0 0 0; */}
      > a {
        color: #544cb6;
        text-decoration: none;
        font-weight: bold;
        margin-left: 0.2rem;
      }
    }
  }
`;
