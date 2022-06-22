import styled, { createGlobalStyle } from "styled-components";
import Screen from "../Screen/Screen";

export default createGlobalStyle`
    :root {
        --yellow-color: #ECC06C;
        --orange-color: #EC8B6C;
        --green-color: #61BE6B;
        --white-color: #FFFFFF;
        --grey-color: #F0F3F8;
        --purple-color-10: #C3C3E5;
        --purple-color: #666fc1;
        --error-color: #F44336;




        --transition: all 0.3s;
    }


    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 100%;
    }

    body {
        font-family: 'Roboto', sans-serif;
        background-color: var(--grey-color)
    }


::-webkit-scrollbar {
  width: 20px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: var(--purple-color); 
  border-radius: 10px;
}


::-webkit-scrollbar-thumb:hover {
  background: var(--purple-color); 
}

`;

export const Select = styled.select`
  border: none;
  outline: none;
  border-radius: 0.4rem;
  padding: 0.55rem;
  margin: 0.8rem;
  ${Screen.sm`
     margin: 0 
  `}
`;
