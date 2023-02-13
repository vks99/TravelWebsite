
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { Alert } from "reactstrap";
type LoginForm = {
	password:String,
	user_name:String,
  }

const Login=()=>{
	const [formData, setFormData] = useState<LoginForm[]>([]);
	const [successMessage, setSuccessMessage] = useState("");
    const [isOpen, setIsOpen] = useState(false);
  

    const onSubmit=async(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const response = await axios.post(
            'http://localhost:8000/login',formData
        )
        .then((res) => {
            if(res.data===true)
            {
                setSuccessMessage("login successfully!");
                setIsOpen(true);
            }
            else{
                setSuccessMessage("login Failed: Invalid data entered. Please check the information you have entered and try again.");
                setIsOpen(true);
            }
            console.log(res.data);
        })
        .catch((error) => {
            console.error(error);
        });
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    return(

		<div className="col-md-8 form-right-side p-5 ">
		<h1 className='mb-4'>Login</h1>
		<form onSubmit={onSubmit} className='row g-4'>
		<div className="col-md-6">
				<label htmlFor="User Name" className='form-label'>User Name</label>
				<input type="text" className='form-control' name='user_name' onChange={handleChange} placeholder='User Name' required/>
			</div>
			<div className="col-md-6">
				<label htmlFor="Password" className='form-label'>Password</label>
				<input type="password" className='form-control' name='password' onChange={handleChange}  required/>
			</div>
			<Alert color="success" isOpen={isOpen} toggle={() => setIsOpen(!isOpen)}>
				{successMessage}
			</Alert>
		</form>
		</div>
    
    )   

}

export default Login;