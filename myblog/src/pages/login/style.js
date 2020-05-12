import styled from "styled-components";
export const LoginWrapper = styled.div`
z-index=0;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 56px;
  background: #eee;
`;
export const LoginBox = styled.div`
  width: 500px;
  height: 180px;
  margin: 100px auto;
  background: #fff;
  box-shadow: 0 0 8px rgda(0, 0, 0, 0.1);
  padding-top: 20px;
`;
export const Input = styled.input`
  box-sizing: border-box;
  width: 250px;
  display: block;
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
  color: #777;
  margin: 10px auto;
`;
export const Button = styled.div`
  width: 250px;
  background: #3194d0;
  height: 30px;
  line-height: 30px;
  border-radius: 10px;
  color: #fff;
  margin: 10px auto;
  text-align: center;
`;
