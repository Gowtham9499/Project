import React,{useState} from 'react';


const Validation = (values) => {
    const [success,setSuccess] = useState(false)
    let errors = {}

    if(!values.email){
        errors.email ="Email Required";
        setSuccess(false)
    }
    else if (values.email !== "admin777@gmail.com") {
        errors.email = "email does not match";
        setSuccess(false)
    }
    else{
        return
        setSuccess(true)
    }


    if(!values.password){
        errors.password ="Password Required";
        setSuccess(false)
    }
    else if (values.password !== '444444') {
        errors.password = "Password does not match";
        setSuccess(false)
    }
    else {
        return
        setSuccess(true)
    }

    return errors;
}

export default Validation;