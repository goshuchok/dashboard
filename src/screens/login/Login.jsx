import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { StyledFlex, Wrapper } from '../../styles/Flex.styled';

import {
  StyledButton,
  StyledForm,
  StyledInput,
} from '../../styles/Form.styled';
import { StyledLink, StyledOr } from '../../styles/Link.styled';
import {
  StyledError,
  StyledSubTittle,
  StyledTittle,
} from '../../styles/Title.styled';

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    const userData = JSON.parse(localStorage.getItem(data.email));
    if (userData) {
      if (userData.password === data.password) {
        console.log(userData.name + ' You Are Successfully Logged In');
        navigate('/main');
      } else {
        console.log('Email or Password is not matching with our record');
      }
    } else {
      alert('Email or Password is not matching with our record');
    }
  };

  return (
    <Wrapper>
      <StyledFlex>
        <StyledTittle>Welcome back</StyledTittle>
        <StyledSubTittle>
          Welcome back! Please enter your details
        </StyledSubTittle>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <StyledInput
            {...register('email', { required: true })}
            type="email"
            placeholder="Email"
            name="email"
          />
          {errors.email && <StyledError>{errors.message}</StyledError>}

          <StyledInput
            {...register('password')}
            type="password"
            placeholder="Password"
            name="password"
          />
          <StyledButton type="submit">Log In</StyledButton>
        </StyledForm>

        <StyledLink to={`/register`}>
          Or
          <StyledOr>Sign up</StyledOr>
        </StyledLink>
      </StyledFlex>
    </Wrapper>
  );
};
