import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
  padding: 0 2rem;
`;

export const Logo = styled.img`
  width: 130px;
`;

export const Title = styled.h1`
  font-size: 2.2rem;
  color: ${(props) => props.theme.colors.white};
`;

export const Form = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  max-width: 583px;
`;

export const Input = styled.input`
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 64px;
  line-height: 64px;
  font-size: 24px;
  padding: 0 24px;
  border: 3px solid ${(props) => props.theme.colors.gray600};
  border-radius: 5px;
  color: ${(props) => props.theme.colors.gray600};

  &::placeholder {
    color: ${(props) => props.theme.colors.gray600};
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 16px;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
    font-size: 16px;
  }
`;

export const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  width: 80px;
  height: 64px;
  border-top: 3px solid ${(props) => props.theme.colors.gray600};
  border-right: 3px solid ${(props) => props.theme.colors.gray600};
  border-bottom: 3px solid ${(props) => props.theme.colors.gray600};
  cursor: pointer;
  border-radius: 5px;
  transition: 0.5;

  &:hover {
    background: ${(props) => props.theme.colors.gray500};
    opacity: 0.5;
  }

  &[disabled] {
    pointer-events: none; /* Prevent clicking on the disabled button */
  }
`;
