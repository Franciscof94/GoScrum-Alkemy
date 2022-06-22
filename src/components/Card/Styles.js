import styled from "styled-components";
import Card from "../../assets/task.svg";

export const Wrapper = styled.section`
  height: 210px;
  width: 240px;
  font-size: 1rem;
  margin: 0 1rem 1.8rem 1rem;

  > div {
    background-image: url(${Card});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100%;
    padding: 0 0.8rem;
    > div:first-child {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.2rem;
      h3 {
        color: var(--grey-color);
        font-size: 1.1em;
      },
      margin: 0 auto;
      > div {
        cursor: pointer;
      }
    }
    > div:last-child {
      margin: 1.2rem auto 0 auto;
      > div:first-child {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: bold;

        > div {
          font-size: 0.8em;
          
        }
      }
      > div:nth-child(2) {
        min-height: 68px;
        padding: 0.2rem 0.5rem;
        position: relative;
        p {
          font-size: 1rem;
        }
        button {
          position: absolute;
          bottom: 0.5rem;
          right: 0.9rem;
          background: none;
          border: 0.3rem solid var(--purple-color-10);
          cursor: pointer
        }
      }
      > div:last-child {
        display: flex;
        justify-content: space-around;
        align-items: center;
        > div:nth-child(1) {
          display: flex;
          flex-direction: column;
          align-items: center;
          font-weight: bold;
          > div {
            background-color: ${(props) =>
              props.importance === "LOW"
                ? "var(--orange-color)"
                : props.importance === "MEDIUM"
                ? "var(--yellow-color)"
                : props.importance === "HIGH"
                ? "var(--green-color)"
                : ""};
            padding: 0.2rem 0.5rem;
            border-radius: 0.25rem;
            box-shadow: 1px 2px 2px 2px rgba(68, 68, 68, 0.27);
            font-weight: bold;
            color: var(--white-color);
            min-width: 75px;
            text-align: center;
            margin-top: 0.2rem;
          }
        }
        > div:nth-child(2) {
          display: flex;
          flex-direction: column;
          align-items: center;
          font-weight: bold;
          > div {
            cursor: pointer;
            background-color: ${(props) =>
              props.status === "NEW"
                ? "var(--orange-color)"
                : props.status === "IN PROGRESS"
                ? "var(--yellow-color)"
                : props.status === "FINISHED"
                ? "var(--green-color)"
                : ""};  
            padding: 0.2rem 0.5rem;
            border-radius: 0.25rem;
            box-shadow: 1px 2px 2px 2px rgba(68, 68, 68, 0.27);
            font-weight: bold;
            min-width: 75px;
            text-align: center;
            color: var(--white-color);
            margin-top: 0.2rem;
        }
      }
    }
  }
`;
