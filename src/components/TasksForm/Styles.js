import styled from "styled-components";
import Screen from "../../Screen/Screen";

export const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
  h1 {
    margin: 0 auto;
    font-size: 2rem;
  }
  > div {
    margin: 1.5rem 0;
    > form {
      display: flex;
      flex-direction: column;
      > div:first-child {
        display: flex;
        flex-direction: column;
        margin-bottom: 0.5rem;
        ${Screen.sm`
          flex-direction: row
        `}
        > div {
          display: flex;
          flex-direction: column;
          > input {
            border: none;
            outline: none;
            border-radius: 0.4rem;
            padding: 0.6rem;
          }
          > small {
            color: var(--error-color);
            font-weight: bold;
          }
        }
        > div:nth-child(2) {
          margin: 0 1rem;
        }
      }
      > div:nth-child(2) {
        margin-bottom: 1rem;
        > textarea {
          resize: none;
          border: none;
          outline: none;
          border-radius: 0.4rem;
          padding: 0.6rem;
          width: 100%;
        }
        > small {
          color: var(--error-color);
          font-weight: bold;
        }
      }
    }
  }
`;

/* div:last-child {
    display: flex;

    > textarea {
      border: none;
      outline: none;
      border-radius: 0.4rem;
      padding: 0.6rem;
      resize: none;
      width: 100%;
    }
  }
 */

/*   > div:last-child{
    display: flex;

    > textarea {
      border: none;
      outline: none;
      border-radius: 0.4rem;
      padding: 0.6rem;
      resize: none;
      width: 100%;
    }
  } */
