import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;

  section {
    width: 100%;
    margin-top: 7%;
    padding: 110px 45px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      width: 50%;
    }

    > div {
      max-width: 720px;

      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;

      h1 {
        font-size: 36px;
        font-weight: 700;
        text-transform: initial;
        font-family: 'Montserrat', sans-serif;
        color: ${props => props.theme.colors.text};
      }

      p {
        margin: 16px 0 60px;

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

      .broom {
        width: 100%;
        border: none;
        margin-bottom: 2rem;

        display: flex;
        justify-content: center;

        cursor: auto;
        background: transparent;

        svg {
          font-size: 30px;
          cursor: pointer;
          color: ${props => props.theme.colors.text};
          transition: 0.3s;

          :hover {
            transform: scale(1.4);
            color: ${props => props.theme.colors.primary};
          }
        }
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

  ${media.lessThan('1600px')`
    height: 100vh;

    justify-content: center;

    section {
      width: 100%;
      margin-top: 120px;
      padding: 90px 38px;

      > div {
        max-width: 600px;

        .inputs {
          input {
            width: 240px;
            height: 50px;
          }
        }
      }
    }
  `}

  ${media.lessThan('1440px')`
    section {
      width: 100%;
      padding: 82.5px 34px;

      > div {
        max-width: 600px;

        .inputs {
          input {
            width: 218px;
            height: 45px;
          }
        }
      }
    }
  `}

  ${media.lessThan('1366px')`
    section {
      width: 100%;
      padding: 78px 32px;

      > div {
        max-width: 600px;

        h1, h2 {
          font-size: 30px;
        }

        p {
          font-size: 16px;
        }

        .inputs {
          input {
            width: 206px;
            height: 42px;
          }
        }
      }
    }
  `}

  ${media.lessThan('1280px')`
    section {
      width: 100%;
      padding: 60px 26px;

      > div {
        max-width: 540px;

        p {
          margin: 16px 0 30px;
        }

        .inputs {
          input {
            width: 200px;
            height: 40px;
          }
        }
      }
    }
  `}

  ${media.lessThan('large')`
    section {
      padding: 2rem 4rem;

      flex-direction: column;

      img {
        position: absolute;

        width: 90%;

        opacity: 0.1;
      }

      > div {
        max-width: 90%;
      }
    }
  `}

  ${media.lessThan('small')`
    section {
      padding: 1rem ;

      flex-direction: column;

      img {
        top: 50%;
        z-index: -1;
        position: absolute;

        width: 90%;

        opacity: 0.1;
      }

      > div {
        max-width: 90%;

        h1 {
          font-size: 24px;
          text-align: center;
          text-transform: uppercase;
        }

        p {
          margin: 16px 0 20px;

          font-size: 16px;
          text-align: center;
        }

        .broom {
          margin: 1rem 0;
        }

        h2 {
          margin: 16px 0;

          font-size: 36px;
        }

        .inputs {
          flex-direction: column;

          input {
            width: 90%;
          }
        }
      }
    }
  `}
`;
