import styled from 'styled-components';

export const Form = styled.form`
  padding: 2rem;
  max-width: 300px;

  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0.3rem;
  align-items: baseline;
`;

export const Fieldset = styled.fieldset`
  display: contents;
`;

export const Label = styled.label`
  display: contents;
  text-align: left;
  margin-bottom: -0.75rem;
`;

export const Input = styled.input`
  margin-bottom: 13px;
`;

export const Button = styled.button`
  max-width: 200px;
`;
