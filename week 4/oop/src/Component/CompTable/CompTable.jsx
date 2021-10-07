import React from 'react'
import Table from 'react-bootstrap/Table'



function CompTable() {
  const collums = ['#', 'Name', 'Email'].map((d) => { return (<th>{d}</th>) });
  const data =
    [['1', 'Irsad', 'irsad@gmil.com'],
    ['2', 'agung', 'agung@gmil.com'],
    ['3', 'Angga', 'Angga@gmil.com'],
    ['4', 'fadil', 'fadil@gmil.com']
    ];
  const colls = [];
  for (let row of data) {
    colls.push(row.map((d) => { return (<td>{d}</td>) }));
  }
  const rows = colls.map((d) => { return (<tr>{d}</tr>) })


  return (
    <dir>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            {collums}
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </Table>
    </dir>
  )
}
/* function App() {
  const users = [["1", "1", "1"], ["2", "2", "2"]];
  const final = [];

  for (let user of users) {
    final.push(<li key={user}>{user}</li>);
  }
  return (
    <div className="App">
      <ul>{final}</ul>
    </div>
  );
} */

export { CompTable };

