import React, { Component } from 'react'
import { post } from 'axios';

class Login extends Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const request = {"auth": {"email": email, "password": password}};
    post('/api/v1/user_token', request)
      .then(response => {
        localStorage.setItem("jwt", response.data.jwt);
        this.props.history.push("/");
      })
      .catch(error => console.log('error', error));
  }      

  render() {
    return (
      <div className="container">
        <div className="text-center mt-5" style={{ width: 500, margin: 'auto' }}>
          <form onSubmit={this.handleSubmit} className="form-signin">
            <img className="mb-4" src="https://arteoconseil.fr/wp-content/uploads/2018/02/Trello-logo-.png" alt="" width="300" height="90" />
            <h1 className="h3 mb-3 font-weight-normal">Connectez vous</h1>
            <label htmlFor="email" className="sr-only">Email</label>
            <input type="email" id="email" name="email" className="form-control" placeholder="Email" />
            <label htmlFor="password" className="sr-only">Mot de passe</label>
            <input type="password" id="password" name='password' className="form-control" placeholder="Mot de passe" />
            <button className="btn btn-lg btn-primary btn-block">Connexion</button>
          </form>
        </div>
      </div>
    )
  }
  }
  

export default Login;
