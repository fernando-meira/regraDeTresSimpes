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

      h1 {
        font-size: 36px;
        font-weight: 700;
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
      }
    }
  }
`;
