import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;

  section {
    width: 100%;
    padding: 110px 45px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    > div {
      max-width: 720px;

      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;

      .Typewriter {
        margin: 16px 0 118px;

        font-size: 18px;
        font-weight: 500;
        font-family: 'Montserrat', sans-serif;
        color: ${props => props.theme.colors.text};
      }

      h1 {
        font-size: 36px;
        font-weight: 700;
        text-transform: initial;
        font-family: 'Montserrat', sans-serif;
        color: ${props => props.theme.colors.text};
      }

      p {
        margin: 16px 0 118px;

        font-size: 18px;
        font-weight: 500;
        font-family: 'Montserrat', sans-serif;
        color: ${props => props.theme.colors.text};
      }

      h2 {
        margin: 32px 0;

        font-size: 36px;
        font-weight: 700;
        font-family: 'Montserrat', sans-serif;
        color: ${props => props.theme.colors.text};
      }

      .inputs {
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: space-between;

        input {
          width: 290px;
          height: 60px;
          padding: 10px 16px;
          border-radius: 8px;
          border: 1px solid ${props => props.theme.colors.primary};

          background: ${props => props.theme.colors.secondary};
          color: ${props => props.theme.colors.text};
        }

        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        span::before {
          content: '';
          width: 0;
          height: 0;
          margin-right: 10px;
          border-top: 5px solid transparent;
          border-bottom: 5px solid transparent;
          border-right: 5px solid ${props => props.theme.colors.text};

          display: inline-block;
          vertical-align: middle;
        }

        span::after {
          content: '';
          width: 0;
          height: 0;
          margin-left: 10px;
          border-top: 5px solid transparent;
          border-bottom: 5px solid transparent;
          border-left: 5px solid ${props => props.theme.colors.text};

          display: inline-block;
          vertical-align: middle;
        }
      }
    }
  }
`;
