import styled from 'styled-components';

export const Header = styled.header `
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  h1 {
    display: inline-block;
  }

  aside {
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const SearchForm = styled.div `
  position: relative;
  margin-left: 16px;

  form {
    input {
      padding-left: 26px;
      margin-top: 0 !important;
    }

    button {
      position: absolute;
      top: 8px;
      left: 4px;
      background: transparent;
      border: none;
    }
  }
`;

export const Button = styled.button`
  padding: .5em 1em;
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: center;
  background: #27ae60;
  border: none;
  color: #fff;
  border-radius: 4px;
`;