import { NavLink } from 'react-router-dom';

const Login=()=>{
    return(
        <div>
    <form method="POST" action="/login">
	<input type="text" name="email" placeholder="email"/>
	<input type="text" name="password" placeholder="password"/>
	<input type="submit"/>
	</form>
        </div>
    )
};

export default Login;