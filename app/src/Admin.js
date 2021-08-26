import { React, useState, useEffect} from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export default function Admin() {
  const [data, setData] = useState([])
  
  useEffect(() => {
    fetch('http://3.94.82.233:8080/patients')
    .then(res => res.json())
    .then(data => {
      setData(data)
    })
  }, [data])

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>DOB</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Appointment Date</TableCell>
            <TableCell>Appointment Time</TableCell>
            <TableCell>Driver License</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((d) => (
            <TableRow key={d.id}>
              <TableCell>{d.name}</TableCell>
              <TableCell>{d.email}</TableCell>
              <TableCell>{d.phone}</TableCell>
              <TableCell>{d.dob}</TableCell>
              <TableCell>{d.Address}</TableCell>
              <TableCell>{(new Date(d.appointment)).toLocaleDateString()}</TableCell>
	      <TableCell>{(new Date(d.appointment)).toLocaleTimeString()}</TableCell>
	      <TableCell><a href={ 'http://3.94.82.233:8080/static/' + d.driverlicense } target="_blank" rel="noreferrer">View</a></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>
    </Container>
  )
}
