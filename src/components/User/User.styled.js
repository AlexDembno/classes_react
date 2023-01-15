import styled from 'styled-components';

export const EmailText = styled.p`
  font-size: 30px;
  color: #fff;
  &:hover {
    color: red;
  }
`;

export const SpanText = styled.span`
  background-color: ${({ isRed }) => (isRed ? 'red' : 'yellow')};
`;

export const NameText = styled.p`
  font-size: 20px;
  color: blue;
  &:hover {
    color: red;
  }
  &:hover ${SpanText} {
    color: white;
  }
`;
