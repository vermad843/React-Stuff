import React, { Component } from 'react';
import './App.css';

const emailRegex = RegExp(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/)


const formValid = formErrors => {
    let valid = true;

    Object.values(formErrors).forEach(val => { 
        val.length > 0 && (valid = false)
      });
    return valid;
};


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName : null,
            lastName : null,
            email : null,
            password : null,
            formErrors : {
                firstName : "",
                lastName : "",
                email : "",
                password : "",
            }
        };
     }

    handleSubmit = (e) => {
     e.preventDefault();
     if(formValid(this.state.formErrors)) {
        console.log(
            `
         --SUBMITTING--
           First Name : ${this.state.firstName}
           Last Name : ${this.state.lastName}
           Email : ${this.state.email}
           Password : ${this.state.password} 
            `   
        ) 
     }else {
         console.log('FORM INVALID')
     }
    }


    handleChange = (e) => {
        e.preventDefault();
        const {name , value} = e.target;
        let formErrors = this.state.formErrors;
       
        // console.log("Name : ", name);
        // console.log("value :", value);
        
        switch(name) {
           case 'firstName' : 
              formErrors.firstName = 
              value.length < 3 
              ? 'minimum 3 characters required' 
              : "" ;
            break; 
           case 'lastName' : 
            formErrors.lastName = 
            value.length < 3 
            ? 'minimum 3 characters required' 
            : "" ;
            break;  
            case 'email' : 
              formErrors.email = 
              emailRegex.test(value) 
              ? ''
              : 'invalid email address' ;
            break; 
           case 'password' : 
            formErrors.password = 
            value.length < 6  
            ? 'minimum 6 characters required' 
            : "" ;
            break;  
           default:
            break; 
        }
        this.setState({
            formErrors, [name] : value }, () => console.log(this.state));
    };
    

    render() {
        const {formErrors} = this.state;
        return (
            <div className = "wrapper">
               <div className = "form-wrapper">
                  <h1>Create Account</h1> 
                  <form onSubmit = {this.handleSubmit} noValidate>
                     <div className = "firstName">
                        <label htmlFor = "firstName">First Name</label>
                        <input 
                           type = "text" 
                           className = ""
                           placeholder = "First Name" 
                           name = "firstName"
                           onChange = {this.handleChange}
                           noValidate/>
                           {
                               formErrors.firstName.length > 0 && (
                                   <span className = "errorMessage">{formErrors.firstName}</span>
                               )
                           }
                     </div>
                     <div className = "lastName">
                        <label htmlFor = "lastName">Last Name</label>
                        <input 
                           type = "text" 
                           className = "" 
                           placeholder = "Last Name" 
                           name = "lastName"
                           onChange = {this.handleChange}
                           noValidate/>
                            {
                               formErrors.lastName.length > 0 && (
                                   <span className = "errorMessage">{formErrors.lastName}</span>
                               )
                           }
                     </div>
                     <div className = "email">
                        <label htmlFor = "email">Email</label>
                        <input 
                           type = "email" 
                           className = "" 
                           placeholder = "Email" 
                           name = "email"
                           onChange = {this.handleChange}
                           noValidate/>
                            {
                               formErrors.email.length > 0 && (
                                   <span className = "errorMessage">{formErrors.email}</span>
                               )
                           }
                     </div>
                     <div className = "password">
                        <label htmlFor = "password">password</label>
                        <input 
                           type = "password" 
                           className = "" 
                           placeholder = "Password" 
                           name = "password"
                           onChange = {this.handleChange}
                           noValidate/>
                            {
                               formErrors.password.length > 0 && (
                                   <span className = "errorMessage">{formErrors.password}</span>
                               )
                           }
                     </div>
                     <div className = "createAccount">
                        <button type = "submit">
                             Create Account
                        </button>
                        <small>
                            Already Have an Account
                        </small>
                     </div>
                  </form>
               </div>
            </div>
        );
    }
}

export default App;