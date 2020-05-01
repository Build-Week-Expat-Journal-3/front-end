import Styled from 'styled-components';
//import Background from "../media/smurfsBackground.jpg"
//import { titleKeyFrame } from "../media/keyframes"
import Logo from "../../media/logos/small_no_tagline.png"
//import Loader from "../../media/images/loader.gif"
import { NavLink } from 'react-router-dom';
import LoaderGif from "../../media/images/loader.gif"
import { Field } from "formik"
import Background from "../../media/images/img2.jpg"


//App
export const ContainerDiv = Styled.div`
display:flex;
`

//Navbar

export const NavbarDiv = Styled.div`
display:flex;
flex-wrap:nowrap;
justify-content:space-between;
align-items: center;
padding: 0 1%;
background:rgba(255, 242, 229, 0.44);
box-shadow: 5px 5px 8px #b7472a;
position:fixed;
width:100%;
top: 0;
left: 0;
`
export const NavbarLink = Styled.a`
display:flex;
align-content: center;
text-decoration:none;
font-family: 'Poppins', sans-serif;
margin: 0 3%;
font-size: 1rem;
`
export const NavigationLink = Styled(NavLink)`
display:flex;
align-content: center;
text-decoration:none;
font-family: 'Poppins', sans-serif;
margin: 0 3%;
font-size: 1rem;
`
export const NavLogoContainerDiv = Styled.div`
display: flex;
flex-wrap: wrap;
align-items:center;
width:30%;
margin-left: 5%;
justify-content:space-around;
color: #b7472a;
font-family: 'Manrope', sans-serif;
`

//Login/Register

export const LoginBackgroundContainer = Styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-content: center;
flex-wrap: wrap;
margin-top: 8%;
color:black;
text-align: center;
width:50%;
`

export const LoginContainerDiv = Styled.div`
display: flex;
flex-wrap: wrap;
align-content:center;
justify-content: center;
width:50%;
margin: 0 auto;
`

export const LoginVideoBackground = Styled.div`
display: flex;
justify-content: center;
`


export const AwesomeInput = Styled(Field) `
display:flex;
justify-content:center;
text-align: center;
font-size: 1rem;
background: transparent;
border: none;
border-bottom: 3px solid #b7472a;
margin: 5% auto;
width: 80%;
outline:none;
flex-wrap: nowrap;
`

export const AwesomeLabel = Styled.label `
margin: 5% 3%;
`

export const FormContainerDiv = Styled.div`
display: flex;
flex-wrap: nowrap;
justify-content: center;
padding: 3%;
margin: 2%;
color: ;
font-size: 1.2rem;
background:rgba(255, 242, 229, 0.7);
border-radius: 25px;
width:80%;
`

export const AwesomeButton = Styled.button `
box-shadow: 5px 5px 8px #b7472a;
padding:1%;
border-radius: 5px;
font-size: .7em;
margin: 5% 1%;
outline:none;
width: 50%;
background: linear-gradient(19deg, rgba(183,71,42,1) 0%, rgba(255,213,171,1) 47%, rgba(183,71,42,1) 100%);
color:#b7472a;
`
export const AwesomeSubHeader = Styled.h4`
display:flex;
text-align:center;
color: #b7472a;
padding: 1%;
`

//Loader

// export const Loader = Styled.div`
// position: absolute;
// height: 20%;
// width: 20%;
// top: 50%;
// left: 50%;
// margin-left: -50px;
// margin-top: -50px;
// background-image: url(${LoaderGif};
// background-size: 100%;
// `
//PostList

// export const PLBackgroundContainer = Styled.div`
// display: flex;
// flex-direction: column;
// justify-content: center;
// align-content: center;
// margin-top: 8%;
// color:black;
// text-align: center;
// width:50%;
// `
// export const PLImageBackground = Styled.div `
// display: flex;
// justify-content:center;
// background-image: url(${Background});
// background-size:cover;
// position:fixed;
// overflow:hidden;
// `

export const PostListContainer = Styled.div`
display: flex;
flex-direction: column;
max-width: 95%;
margin: 10% auto;
`
//PostSummary

export const PLSBackgroundContainer = Styled.div`
display:flex;
justify-content: center;
flex-direction: row;
flex-wrap: wrap;
padding:3%
`
export const Container = Styled.div`
display:flex;
flex-direction: column;
flex-wrap: wrap;
align-items: center;
align-content:center;
`

export const PLSContainer = Styled.div`
display:flex;
width: 950%;
justify-content:center;
margin: 0 auto;
`

export const PostSummaryImages = Styled.img`
object-fit: cover;
max-width:55%
`
//box-shadow: 5px 5px 8px green;

export const PostAwesomeTitleHeader = Styled.h2`
display:flex;
text-align:center;
color: black;
text-align: center;
text-decoration:none;
font-size: 1.5rem;
`

//Post



// const LAwesomeHeader = Styled.h1`
// display:flex;
// text-align:center;
// color: white;
// text-shadow: 5px 5px 8px lime;
// text-align: center;

// const AwesomeTitleHeader = Styled.h2`
// display:flex;
// text-align:center;
// color: white;
// text-shadow: 5px 5px 8px lime;
// text-align: center;
// `

// export const ImageBackground = Styled.div `
// display: flex;
// justify-content:center;
// background-image: url(${Background});
// background-size:cover;
// height: 100vh;
// `



// export const TitleDiv = Styled.div`
// animation: ${titleKeyFrame} 0.9s 1.5s 2 both;
// `

// export const ExcellentHeader = Styled.h1 `
// font-family: 'Chewy', cursive;
// padding: 2%;
// margin: 20% 0 5% 0; 
// font-size: 3em;
// `
// //Form
// export const AwesomeInput = Styled.input `
// display:flex;
// justify-content:center;
// text-align: center;
// color: blue;
// font-size: 1rem;
// background: transparent;
// border: none;
// border-bottom: 2px dotted blue;
// padding: .5% 3%;
// width: 80%;
// margin: 3% 0 15% 0;
// outline:none;
// flex-wrap: nowrap;
// `
// export const AwesomeLabel = Styled.label `
// margin: 5% 3%;
// `

// export const FormContainerDiv = Styled.div`
// display:flex;
// justify-content: center;
// text-align: left;
// padding: 5%;
// margin: 2%;
// color:royalBlue;
// `

// export const AwesomeButton = Styled.button `
// box-shadow: 5px 5px 8px blue;
// padding:2%;
// border-radius: 5px;
// font-size: .7em;
// margin: 5% 1%;
// outline:none;
// width: 80%;
// background: linear-gradient(to right, blue, cornFlowerBlue);
// color:lightBlue;
// `
// //Smurf List

// export const CardContainerDiv = Styled.div`
// display:flex;
// justify-content: center;
// text-align: center;
// width: 95%;
// margin: 2%;
// flex-wrap: wrap;
// `

// //Smurf Card

// export const CardDiv = Styled.div`
// width: 20%;
// text-align: center;
// background-color: dodgerBlue;
// margin: 2%;
// padding:2%;
// color: white;
// border-radius: 15px;
// box-shadow: 5px 5px 5px blue;
// `

