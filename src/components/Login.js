import React from "react";
import { Grid, Paper, Avatar, TextField, Button } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Link } from "react-router-dom";
const Login = () => {

    const paperStyle = {
        padding: 20,
        height: "70vh",
        width: 280,
        margin: "20px auto",
    };
    const avatarStyle = { backgroundColor: "#1bbd7e" };
    const loginFunction = () => {
        alert("login Success"  );
    };


   
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField
                    label='Username'
                    placeholder='Enter your Username'
                    fullWidth
                    required
                 
                />
                <TextField
                    label='Password'
                    placeholder='Enter your Password'
                    fullWidth
                    required
                    type='password'
         
                   
                />

                <FormControlLabel
                    control={<Checkbox name='CheckB' color='primary' />}
                    label='Remember me'
                />
                <Button
                    type='submit'
                    color='primary'
                    variant='contained'
                    fullWidth
                    onClick={() => loginFunction()}>
                    Sign in
                </Button>
                <Grid />
                <Button
                    component={Link}
                    to='/SignUp'
                    fullWidth
                    color='primary'
                    variant='outlined'
                    style={{ marginTop: 10 }}>
                    Sign up
                </Button>
            </Paper>
        </Grid>
    );
};

export default Login;
