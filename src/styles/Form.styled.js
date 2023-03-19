import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 1.5rem 0 0.25rem 0;
`;

export const StyledInput = styled.input`
  margin: 0.5rem 0;
  height: 64px;
  width: 500px;
  border-radius: 8px;
  border: 1px solid #7d7f8e;
  background-color: #3d4250;
  font-family: Metropolis;
  font-size: 15px;
  font-weight: 400;
  text-indent: 10px;
  padding: 0px;
  &:focus {
    outline: none;
  }
`;

export const StyledButton = styled.button`
  height: 64px;
  width: 500px;
  border-radius: 8px;
  padding: 20px 40px 20px 40px;
  background: #8941ff;
  color: white;
  font-family: Metropolis;
  font-size: 15px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  cursor: pointer;
  border: none;
  margin: 1.25rem 0;
`;
