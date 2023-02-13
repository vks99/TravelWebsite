
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { Alert } from "reactstrap";
type RegisterForm = {
	name : String,
	phone : String,
	email : String,
	password:String,
	address:String,
	user_name:String,
  }

const Signup=()=>{
	const [formData, setFormData] = useState<RegisterForm[]>([]);
	const [successMessage, setSuccessMessage] = useState("");
    const [isOpen, setIsOpen] = useState(false);
  

    const onSubmit=async(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const response = await axios.post(
            'http://localhost:8000/register',formData
        )
        .then((res) => {
            if(res.data===true)
            {
                setSuccessMessage("Register successfully!");
                setIsOpen(true);
            }
            else{
                setSuccessMessage("Register Failed: Invalid data entered. Please check the information you have entered and try again.");
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
		<h1 className='mb-4'>Sign UP</h1>
		<form onSubmit={onSubmit} className='row g-4'>
		<div className="col-md-6">
				<label htmlFor="User Name" className='form-label'>User Name</label>
				<input type="text" className='form-control' name='user_name' onChange={handleChange} placeholder='User Name' required/>
			</div>
			<div className="col-md-6">
				<label htmlFor="Password" className='form-label'>Password</label>
				<input type="password" className='form-control' name='password' onChange={handleChange}  required/>
			</div>
			<div className="col-md-6">
				<label htmlFor="Name" className='form-label'>Name</label>
				<input type="text" className='form-control' name='name' onChange={handleChange} placeholder='Name' required/>
			</div>
			<div className="col-md-6">
				<label htmlFor="Email" className='form-label'>Email</label>
				<input type="email" className='form-control' name='email' onChange={handleChange} placeholder='Email' required/>
			</div>
			<div className="col-md-6">
				<label htmlFor="Phone" className='form-label'>Phone</label>
				<input type="phone" className='form-control' name='phone' onChange={handleChange}  placeholder='Phone' required/>
			</div>
			<div className="col-md-12">
				<label htmlFor="Address" className='form-label'>Address</label>
				<input type="text" className='form-control' name='address' onChange={handleChange} placeholder='address' required/>
			</div>
			<div className="col-12">
				<button className='button' type="submit">Sign UP</button>
			</div>
			<Alert color="success" isOpen={isOpen} toggle={() => setIsOpen(!isOpen)}>
				{successMessage}
			</Alert>
		</form>
		</div>
    
    )   
}

export default Signup;
