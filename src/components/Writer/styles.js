import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;

  .Typewriter__wrapper {
    a {
      font-weight: 700;
      text-decoration: none;
      color: ${props => props.theme.colors.text};
    }
  }

  .Typewriter__cursor {
    color: ${props => props.theme.colors.primary};
  }
`;
