import styled from 'styled-components';

export const Container = styled.footer`
  position: fixed;
  bottom: 0;

  width: 100%;
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: center;

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
