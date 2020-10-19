import styled from 'styled-components'

export const Itembox = styled.div`
  width: 500px;
  height: 150px;
  background: #f7f6f6;
  border-radius:10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 4px 4px 9px #ffcece91;
  margin-top: 40px;
`;
export const Btnbox = styled.div`
  width: 100px;
  display: flex;
  justify-content: space-between;
`;
export const Button = styled.button`
  background: #e60000;
  border: none;
  padding: 5px 8px;
  border-radius: 5px;
  cursor: pointer;
  color: #fff;
  font-weight: bold;
`;
export const Textbox = styled.p`
  font-size: 20px;
  font-weight: 900;
  color: #483838;
`;
export const Namebox = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: #333;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;