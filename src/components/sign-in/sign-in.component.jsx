import React, {Component} from 'react';

import './sign-in.styles.scss'

class SignIn extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({ email: '', password: ''} )
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }
    render() {
        const { email, password } = this.state;
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

            <form onClick={this.handleSubmit}>
                <input type="email" name="email" value={email} required />
                <label>Email</label>
                <input type="password" name="password" value={password} onChange={this.handleChange}required />
                <label>Email</label>
                <input type="submit" value="Submit Form"/>
            </form>
            </div>
        )

        
    }
}

export default SignIn;