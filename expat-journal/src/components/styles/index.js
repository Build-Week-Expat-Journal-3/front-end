import Styled from 'styled-components';
import Logo from "../../media/logos/small_no_tagline.png"
import { NavLink } from 'react-router-dom';
import LoaderGif from "../../media/images/loader.gif"
import { Field } from "formik"
import image3 from "../../media/images/img3.jpg"
import { BGColorKeyFrames, LogoKeyFrames} from "../../media/keyframes"
import image2 from "../../media/images/img2.jpg"
import image1 from "../../media/images/img9.jpg"

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
background:rgba(255, 242, 229, 0.65);
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

export const NavigationLink2 = Styled(NavLink)`
display:flex;
align-content: center;
text-decoration:none;
color:white;
font-family: 'Poppins', sans-serif;
margin: 0 3%;
font-size: 2rem;
box-shadow: 5px 5px 8px #4d3e3e;
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
//animations

export const LogoAnimate = Styled.div`
animation: ${LogoKeyFrames} 0.6s ease-out 2s both;
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


export const IMGBackPContainer2 = Styled.div`
background-image: url(${image3});
background-attachment: fixed;
background-position: center;
background-size: cover;
width: 100%;
`

export const PostListContainer = Styled.div`
display: flex;
flex-direction: column;
max-width: 95%;
margin: 4% 0 0 2%;
background:rgba(255, 242, 229, 0.8);
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
margin-top:1%;
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

export const PostAwesomeTitleHeader = Styled.h2`
display:flex;
text-align:center;
color: black;
text-align: center;
text-decoration:none;
font-size: 1.5rem;
`

//UserPost

export const UserContainerDiv = Styled.div`
display:flex;
flex-direction: column;
margin-top: 4%;
`

export const UserCreateDiv = Styled.div`
display:flex;
justify-content: center;
align-text:center;
padding: 2%;
animation: ${BGColorKeyFrames} 5s linear infinite alternate both;
`
//Post
export const IMGBackContainer1 = Styled.div`
background-image: url(${image2});
background-attachment: fixed;
background-position: center;
background-size: cover;
width: 100%;
`

export const PostContainer = Styled.div`
display: flex;
flex-direction: column;
max-width: 95%;
margin: 4% 0 0 2%;
background:rgba(255, 242, 229, 0.8);
`
export const PostDiv = Styled.div`
display: flex;
justify-content:center;
`

export const AwesomeButton3 = Styled.button `
box-shadow: 5px 5px 8px #b7472a;
padding:1%;
border-radius: 5px;
font-size: .7em;
outline:none;
width: 10%;
background: linear-gradient(19deg, rgba(183,71,42,1) 0%, rgba(255,213,171,1) 47%, rgba(183,71,42,1) 100%);
color:#b7472a;
margin: 2% 5% ;
`
export const PostHeader = Styled.h2`
display:flex;
color:black;
text-align:center;
margin: 1% auto;
padding
text-decoration:none;
font-size: 1.5rem;
`
export const PostLocation = Styled.p`
display:flex;
margin: 0 auto;
text-align:center;
color: black;

text-decoration:none;
font-size: 1.5rem;
`

export const PostStory= Styled.p`
display:flex;
margin: 0 auto;
text-align:justify;
color: black;
line-height: 1.2rem;
text-decoration:none;
font-size: .8rem;

padding: 2%;
`


//Create Post

export const IMGBackContainer3 = Styled.div`
display:flex;
background-image: url(${image1});
background-attachment: fixed;
background-position: center;
background-size: cover;
height: 99vh;
`
export const CreatePostContainer = Styled.div`
display: flex;
flex-direction: column;
justify-content:center;
text-align:center;
border-radius:25px;
width: 70%;
margin: 6% auto;
padding: 0 5%;
background:rgba(255, 242, 229, 0.8);
`

export const AwesomeInput2 = Styled.input `
display:flex;
margin-left:8%;
justify-content:center;
text-align: center;
font-size: 1rem;
background: transparent;
border: none;
border-bottom: 2px dotted brown;
padding: 2% 3%;
width: 80%;
outline:none;
flex-wrap: nowrap;
`
export const AwesomeTextArea = Styled.textarea `
display:flex;
justify-content:center;
text-align: center;
font-size: 1rem;
background: transparent;
border: none;
border-bottom: 2px dotted brown;
padding: .5% 3%;
width: 80%;
margin-left:8%;
padding: 5% 3%;
outline:none;
flex-wrap: nowrap;
rows:6;
`
export const AwesomeButton2 = Styled.button `
box-shadow: 5px 5px 8px #b7472a;
padding:1%;
border-radius: 5px;
font-size: .7em;
outline:none;
width: 20%;
background: linear-gradient(19deg, rgba(183,71,42,1) 0%, rgba(255,213,171,1) 47%, rgba(183,71,42,1) 100%);
color:#b7472a;
margin: 2% 0 ;
`


