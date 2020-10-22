import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './Login.css'


export default class Login extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        username: '',
        password: ''
      }
      this.handleChangeUsername = this.handleChangeUsername.bind(this);
      this.handleChangePassword = this.handleChangePassword.bind(this);
      this.iniciarSesion = this.iniciarSesion.bind(this);
    }

    handleChangeUsername(event){
      this.setState({
        username: event.target.value
      })

    }

    handleChangePassword(event){
      this.setState({
        password: event.target.value
      })

    }

    iniciarSesion(event){
      event.preventDefault();
      let user = {
                   username: this.state.username,
                   password: this.state.password
      }
      axios.post('http://localhost:8080/user/login', user)
             .then(function (response) {
                 console.log(response.data);
             })
             .catch(function (error) {
                 console.log(error);
             });

    }




    render(){
        return (
            <React.Fragment>
                <CssBaseline />
                <main className="layout">
                    <Paper className="paper">
                        <Avatar className="avatar">

                        </Avatar>
                        <Typography variant="h2">Sign in</Typography>
                        <form className="form" method="post" onSubmit={this.iniciarSesion}>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input id="email" name="email" autoComplete="email" autoFocus onChange={this.handleChangeUsername} />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    onChange={this.handleChangePassword}
                                />
                            </FormControl>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className="submit"
                            >
                                Sign in
                            </Button>
                        </form>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }

}
