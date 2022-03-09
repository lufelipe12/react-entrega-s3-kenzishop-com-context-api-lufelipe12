import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid black;

  h2 {
    font-size: 22px;
  }

  h2:hover {
    cursor: pointer;
  }

  div {
    width: 200px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  p {
    font-size: 15px;
  }

  section {
    top: 12px;
    right: 440px;
    background-color: #6495ed;
    width: 12px;
    height: 12px;
    font-size: 10px;
    color: #fff;
    border-radius: 100px;
    text-align: center;
    font-weight: 600;
    margin: 2px 0px 0px -10px;
  }
`;
