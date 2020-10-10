import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 140px;
  padding: 0 45px;
  border-bottom: 1px solid ${props => props.theme.colors.primary};

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${props => props.theme.colors.secondary};
`;
