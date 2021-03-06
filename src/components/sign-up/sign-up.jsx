import React from 'react';



import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';

import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';

import './sign-up.scss';

class SignUp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword){
            alert("password doesn't match");
            return;
        }
        
        try{
            const {user} = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, {displayName});

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });

        }catch(error){
            console.error(error);
        }
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    render(){
        const {displayName, email, password, confirmPassword} = this.state;
        return(
            <div className='sign-up'>
                <h2 className='title'>Don't have an account ?</h2>
                <span>Sign up for a fresh new account</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit} autoComplete= "off">

                    <FormInput 
                    type='text' 
                    name='displayName' 
                    value={displayName} 
                    onChange={this.handleChange} 
                    label='Display Name' required/>

                    <FormInput 
                    type='text' 
                    name='email' 
                    value={email} 
                    onChange={this.handleChange} 
                    label='Email' required/>

                    <FormInput 
                    type='password' 
                    name='password' 
                    value={password} 
                    onChange={this.handleChange} 
                    label='Password' required/>

                    <FormInput 
                    type='text' 
                    name='confirmPassword' 
                    value={confirmPassword} 
                    onChange={this.handleChange} 
                    label='Confirm Password' required/>

            <CustomButton type='submit'>SIGN UP</CustomButton>

                </form>
            </div>
        );
    }
}

export default SignUp;