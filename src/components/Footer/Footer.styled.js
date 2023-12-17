import styled from 'styled-components';

export const StyledFooter = styled.footer`
  display: flex;
  gap: 12px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #212529;
  height: 100px;
  padding: 10px 0px;
  margin-top: auto;
`;

export const Title = styled.h2`
  font-size: 20px;

  color: #408ec6;
  filter: drop-shadow(0 0 5px rgba(77, 191, 234, 0.8));

  animation-name: blink;
  animation-timing-function: linear;
  animation-duration: 2s;
  animation-iteration-count: infinite;

  @keyframes blink {
    50% {
      opacity: 0.5;
    }
  }
`;

export const LinkList = styled.ul`
  display: flex;
  gap: 25px;
`;

export const Link = styled.a`
  &:hover {
    filter: drop-shadow(0 0 5px rgba(77, 191, 234, 0.8));
  }
`;
