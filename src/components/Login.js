import React from "react";
import { Grid, Paper, Avatar, TextField, Button } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
const Login = () => {
    const [name, setName] = React.useState(null);
    const [password, setPassword] = React.useState(null);
    const paperStyle = {
        padding: 20,
        height: "70vh",
        width: 280,
        margin: "20px auto",
    };
    const avatarStyle = { backgroundColor: "#1bbd7e" };
    const loginFunction = () => {
        alert("login Success");
    };

    const changeName = (x) => {
        setName(x);
    };
    const changePassword = (x) => {
        setPassword(x);
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
                    value={name}
                    onChange={(x) => changeName(x)}
                />
                <TextField
                    label='Password'
                    placeholder='Enter your Password'
                    fullWidth
                    required
                    type='password'
                    onChange={(x) => changePassword(x)}
                />

                <FormControlLabel
                    control={<Checkbox name='CheckB' color='Primary' />}
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
                <Button color='primary' variant='text' fullWidth>
                    Sign up
                </Button>
            </Paper>
        </Grid>
    );
};

export default Login;
