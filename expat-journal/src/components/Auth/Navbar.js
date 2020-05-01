import React, {useContext} from 'react';
import { StateContext } from "../../context"
import { NavbarDiv, NavbarLink, NavigationLink, NavLogoContainerDiv }  from "../styles"
import Logo from "../../media/logos/large_no_tagline.png"



const Navbar = () => {
    const { loggedInUser } = useContext(StateContext);
    const url = "https://goofy-joliot-c0daa3.netlify.app/"
    
	return (
		<NavbarDiv>
            <NavLogoContainerDiv>
            <img src={Logo} alt="logo" style={{  width:"15%" }} />
            <p>"Live Your Dream, Tell Your Story"</p>
            </NavLogoContainerDiv>
            <NavbarLink href={`${url}/index.html`}>Home</NavbarLink>
            <NavbarLink href={`${url}/about.html`}>About</NavbarLink>
            <NavigationLink to="/">Posts</NavigationLink>
            {loggedInUser ?  <NavigationLink to="/posts/create">Create New Post</NavigationLink> : null}
            {loggedInUser ?  <NavigationLink to="/myposts">My Posts</NavigationLink> : null}
            {loggedInUser ? <NavigationLink  to="/logout">Logout</NavigationLink> : null}
            {loggedInUser ? <p style={{ marginRight:"3%", fontSize:"1.2rem", textAlign:"center",color:"brown" }}>{`Welcome ${loggedInUser}!`}</p> : <NavigationLink to="/login">Login/Register</NavigationLink>}
        

		</NavbarDiv>
	);
};

export default Navbar;
