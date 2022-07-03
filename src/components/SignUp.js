import {  Button, Grid, Paper, TextField } from "@material-ui/core";
import React from "react";

import {Link} from 'react-router-dom'
const paperStyle = {
    padding: 20,
    height: "80vh",
    width: 280,
    margin: "20px auto",
};

function SignUp() {
    return (
        <Grid>
            <Paper style={paperStyle} elevation={10}>
                <Grid align='center'>
                    <h3>Sign Up</h3>
                </Grid>
                
                
                <TextField
                    label='Name'
                    placeholder='Enter your name'
                    fullWidth
                    required
                />
                <TextField
                    label='Email'
                    placeholder='Enter your Email'
                    fullWidth
                    required
                    type='email'
                    style={{
                        marginTop:20,
                    }}
                />
                <TextField
                    label='Date of Birth'
                   
                    defaultValue="2000-05-24"
                    
                    fullWidth
                    autoFocus
                    required
                    type='date'
                    InputLabelProps={{
                        shrink: true,
                      }}
                    style={{
                        marginTop:20,
                    }}
                />
                <TextField
                    label='Password'
                    placeholder='Enter your Password'
                    fullWidth
                    required
                    type='password'
                    style={{
                        marginTop:20,
                    }}
                />

                <Button
                    fullWidth
                    type='submit'
                    color='primary'
                    variant='contained'
                    style={{
                    marginTop:20,
                }}
                >
                    Sign up
                </Button>

                <Button
                    component={Link}
                    to='/'
                    fullWidth
                    color='primary'
                    variant='outlined'
                    style={{ marginTop: 10 }}>
                    Sign In
                </Button>
            </Paper>
        </Grid>
    );
}

export default SignUp;
