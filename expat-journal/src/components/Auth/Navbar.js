import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import { StateContext } from "../../context"
import { history } from "../../utils/history"



const Navbar = () => {
    const { loggedInUser } = useContext(StateContext);
    const url = "https://goofy-joliot-c0daa3.netlify.app/"
    
	return (
		<div>
            <a href={`${url}/index.html`}>Home</a>
            <a href={`${url}/about.html`}>About</a>
            <NavLink to="/">Posts</NavLink>
            {loggedInUser ?  <NavLink to="/posts/create">Create New Post</NavLink> : null}
            {loggedInUser ?  <NavLink to="/myposts">My Posts</NavLink> : null}
            {loggedInUser ? <NavLink to="/logout">Logout</NavLink> : null}
            {loggedInUser ? <p>{`Welcome ${loggedInUser}`}</p> : <NavLink to="/login">Login</NavLink>}
        

		</div>
	);
};

export default Navbar;
