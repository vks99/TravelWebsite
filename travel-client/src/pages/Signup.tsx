import { NavLink } from 'react-router-dom';

const Signup=()=>{
    return(
        <div>
    <form method="POST" action="/register">
	<input type="text" name="first_name" placeholder="first_name" />
	<input type="text" name="last_name" placeholder="last_name" />
	<input type="text" name="email" placeholder="email" />
	<input type="text" name="password" placeholder="password"/>
	<input type="submit"/>
	</form>
        </div>
    )
}

export default Signup;