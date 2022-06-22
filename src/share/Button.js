import styled, { css } from "styled-components";

export const Button = styled.button`
  border-radius: 0.4rem;
  transition: var(--transition);
  letter-spacing: 1px;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 0.20rem 1.5rem;
  background-color: var(--purple-color);
  border: 0.2rem solid transparent;
  cursor: pointer;
  margin: 0.7rem 0;
  font-family: 'Roboto', sans-serif;
  a {
    display: inline-block;
  }
  ${(props) => {
    switch (props.variant) {
      case "primary":
        return css`
        color: white;
        &:hover {
            background-color: #8c94d9;
        }
         ${'' /*  a {
            padding: 0.75rem 1.5rem;
          }
          &:hover {
            background: var(--pruple-color);
            a {
              color: var(--white-color);
            }
          } */}
        `;
      case "secondary":
        return css`
          border: 0.2rem solid var(--purple-color);
          color: var(--white-color);
          a {
            padding: 0.75rem 1.5rem;
            color: var(--purple-color);
          }
          &:hover {
            background: var(--purple-color);
            color: var(--white-color);
            a {
              color: var(--white-color);
            }
          }
        `;
      default:
        break;
    }
  }}
`;
