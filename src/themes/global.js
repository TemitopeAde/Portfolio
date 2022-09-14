import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
  }

  a {
    color: ${({ theme }) => theme.text};
  }

  .header li a::after {
    position: absolute;
    content: '';
    background-color: ${({ theme }) => theme.border};
    height: 1px;
    top: 22px;
    right: 0;
    width: 0%;
    transition: .5s;
  }
  
  
  
  .header li a:hover::after {
    position: absolute;
    content: '';
    background-color: ${({ theme }) => theme.border};
    height: 2px;
    top: 34px;
    right: 0;
    left: 0;
    width: 100%;
  }
  

  .header svg {
    fill: ${({ theme }) => theme.svgcolor};
  }
  
  .surname {
    background: ${({ theme }) => theme.surname};
    color: ${({ theme }) => theme.surnameColor};
  }

  .form-control {
    border: 0.1em solid ${({ theme }) => theme.surnameColor};
    color: ${({ theme }) => theme.text};
  }

  .submit-btn {
    background: ${({ theme }) => theme.text};
    border: ${({ theme }) => theme.text};
  }

  

  .services p,
  .intro h6 {
    color:  ${({ theme }) => theme.lightDark};
  }

  .services-section {
    background: ${({ theme }) => theme.lightBackground};
    padding: 4rem;
    padding-bottom: 7rem;
  }
  
`;
