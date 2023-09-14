import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto;
  gap: 0.2rem;
  margin: 1 rem auto;
  padding-right: 1rem;
  margin-left: 9px;
  margin-bottom: 9px;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    grid-template-columns: auto auto;
    gap: 0.8rem;
    padding: 0 1rem;
  }
`;

export const Selector = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.theme.colors.gray700};
  color: ${(props) => props.color || props.theme.colors.white};
  width: 100%;
  min-height: 2 rem;
  border: none;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  transition: background 0.2s, transform 0.3s;
  padding: 1.5% 0.5rem;
  cursor: pointer;

  &:hover,
  &.selected {
    background: ${(props) => props.color || props.theme.colors.gray300};
    color: ${(props) =>
      props.color ? props.theme.colors.white : props.theme.colors.black};
    transform: translateX(0) scale(1.02);
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    border-radius: 20px;
    &:hover,
    &.selected {
      transform: translateX(0) scale(1.02);
    }
  }
`;

export const Cleaner = styled.button`
  background: transparent;
  color: ${(props) => props.theme.colors.gray300};
  border: none;
  text-align: center;
  padding: 1rem;
  cursor: pointer;

  &:hover {
    color: rgba(255, 255, 0.5);
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    text-align: left;
    padding: 0 1rem;
  }
`;
