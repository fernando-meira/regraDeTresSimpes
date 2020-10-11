import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.header`
  position: fixed;
  top: 0;

  width: 100%;
  height: 140px;
  padding: 0 45px;
  border-bottom: 1px solid ${props => props.theme.colors.primary};

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${props => props.theme.colors.secondary};

  ${media.lessThan('small')`
    width: 100vw;
    height: 80px;
    padding: 0 20px;
  `}
`;
