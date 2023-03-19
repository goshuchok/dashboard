import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { StyledLink, StyledOr } from '../../styles/Link.styled';
import { StyledFlex, Wrapper } from '../../styles/Flex.styled';
import {
  StyledButton,
  StyledForm,
  StyledInput,
} from '../../styles/Form.styled';
import {
  StyledError,
  StyledSubTittle,
  StyledTittle,
} from '../../styles/Title.styled';

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const submitForm = (data) => {
    localStorage.setItem(
      data.email,
      JSON.stringify({
        name: data.name,
        password: data.password,
      })
    );
    console.log(JSON.parse(localStorage.getItem(data.email)));
    navigate('/');
  };

  return (
    <Wrapper>
      <StyledFlex>
        <StyledTittle>Welcome</StyledTittle>
        <StyledSubTittle>
          Welcome back! Please enter your details
        </StyledSubTittle>

        <StyledForm onSubmit={handleSubmit(submitForm)}>
          <StyledInput placeholder="Name" type="text" {...register('name')} />
          <StyledInput
            placeholder="Email"
            type="email"
            {...register('email', { required: true })}
          />
          {errors.email && <StyledError>Last email is required.</StyledError>}
          <StyledInput
            placeholder="Password"
            type="password"
            {...register('password', { pattern: /\d+/ })}
          />
          {errors.password && (
            <StyledError>Please enter password .</StyledError>
          )}
          <StyledButton type="submit">Create account</StyledButton>
        </StyledForm>

        <StyledLink to={`/`}>
          Or
          <StyledOr>Log in</StyledOr>
        </StyledLink>
      </StyledFlex>
    </Wrapper>
  );
};
