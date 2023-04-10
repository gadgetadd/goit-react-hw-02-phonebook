import styled from '@emotion/styled';

export const Form = styled.form`
  padding: 30px;
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
`;

export const Label = styled.label`
  display: block;
`;

export const Input = styled.input`
  display: block;
  margin-top: 10px;
  padding: 10px;
  width: 300px;
`;

export const Button = styled.button`
  padding: 0;
  width: 145px;
  height: 145px;
  border-radius: 5px;
  border: 1px solid grey;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
