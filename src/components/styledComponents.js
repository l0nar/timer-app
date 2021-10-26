import styled from "styled-components";

export const TimerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 280px;
  margin: 0 auto 20px;
  border-bottom: 2px green solid;
  border-radius: 10px;
  div {
    font-size: 50px;
    font-family: Arial, Helvetica, sans-serif;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 650px;
  margin: 0 auto;
  padding: 10px;
  font-size: 24px;
  box-shadow: 0 0 5px 0 gray;
  border-radius: 10px;

  label {
    font-weight: bold;
  }
  input {
    padding-left: 10px;
    padding-top: 2px;
    width: 400px;
    border: 1px black solid;
    border-radius: 5px;
    font-size: 24px;
  }
  input:focus {
    outline: none;
  }
  button {
    margin-right: 10px;
    font-size: 24px;
    border-radius: 10px;
    border: 2px green solid;
    padding: 1px 15px;
  }
`;

export const StyledTaskItem = styled.div`
  width: 670px;
  margin: 10px auto 0;
  padding: 10px;
  box-sizing: border-box;
  font-size: 24px;
  box-shadow: 0 0 5px 0 gray;
  border-radius: 10px;
`;
