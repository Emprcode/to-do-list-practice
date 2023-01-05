import Table from 'react-bootstrap/Table';

export const UserTable =({users}) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {
          users.map(({_id, fname, lname, email}) => <tr key={_id}>
        
          <td>{fname}</td>
          <td>{lname}</td>
          <td>{email}</td>
        </tr> )
        }
        
        
      </tbody>
    </Table>
  );
}
