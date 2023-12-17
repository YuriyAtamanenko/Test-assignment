import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 20px;
  color: #cecece;
`;

export const Title = styled.h1`
  font-size: 20px;

  margin-bottom: 20px;
`;

export const Item = styled.li`
  list-style: decimal-leading-zero;
  font-size: 16px;
  margin-top: 8px;
`;

export const Table = styled.table`
  border: 3px solid orange;
  width: 500px;
  height: 150px;
`;

export const Cell = styled.th`
  border: 1px solid orange;
`;

export const Chart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background-color: orange;

  color: #408ec6;
  font-size: 24px;
`;
