import { React, useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Register() {
  const [appointment, setAppointment] = useState({})
  const [upload, setUpload] = useState()

  const classes = useStyles();
  
  const submit = (e) => {
    e.preventDefault();
    const formData = new FormData()
    formData.append("picture", upload.file) 

    fetch('http://3.94.82.233:8080/photo', {
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(data => console.log(data))

    fetch('http://3.94.82.233:8080/patients', {
      method: 'POST',
      body: JSON.stringify({ appointment }),
      headers: { 'Content-Type': 'application/json' },
    })
    .then(res => res.json())
    .then(data => console.log(data))
  } 

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Appointment
        </Typography>
        <form className={classes.form} onSubmit={submit} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="name"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Name"
                autoFocus 
	        onChange={e => setAppointment({ ...appointment, name: e.target.value })}
              />
            </Grid>
	    <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email" 
	        onChange={e => setAppointment({ ...appointment, email: e.target.value })}
              />
            </Grid>
	    <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="phone"
                label="Phone Number"
                name="phone"
                autoComplete="phone" 
	        onChange={e => setAppointment({ ...appointment, phone: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="address"
                label="Address"
                id="address"
                autoComplete="address" 
	        onChange={e => setAppointment({ ...appointment, address: e.target.value })}
              />
            </Grid>
	    <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="dob"
                label="Date of Birth"
                id="dob"
                autoComplete="dob"
	        onChange={e => setAppointment({ ...appointment, dob: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
	      <TextField
                id="datetime-local"
                label="Next appointment"
                type="datetime-local"
                defaultValue="2017-05-24T10:30"
                InputLabelProps={{
                  shrink: true,
                }} 
	        onChange={e => setAppointment({ ...appointment, date: e.target.value })}
              />
            </Grid>
	    <Grid item xs={12}>
              <input
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                type="file" 
	        onChange={e => {
		  setAppointment({ ...appointment, driverlicense: e.target.files[0].name })
 		  setUpload({ ...upload, file: e.target.files[0] })
		}}
              /> 
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            Submit
          </Button> 
        </form>
      </div>
    </Container>
  );
}
