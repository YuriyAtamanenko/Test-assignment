import { Section, Title, Table, Cell } from './Dummy.styles';

const DummyTable = () => {
  return (
    <Section>
      <Title>Dummy Table</Title>
      <Table>
        <tr>
          <Cell>Key Title</Cell>
          <Cell>Value Title</Cell>
        </tr>
        <tr>
          <Cell>Key 01</Cell>
          <Cell>Value 01</Cell>
        </tr>
        <tr>
          <Cell>Key 02</Cell>
          <Cell>Value 02</Cell>
        </tr>
        <tr>
          <Cell>Key 03</Cell>
          <Cell>Value 03</Cell>
        </tr>
      </Table>
    </Section>
  );
};

export default DummyTable;
