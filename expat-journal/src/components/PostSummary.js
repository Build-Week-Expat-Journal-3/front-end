import React from "react"
import { Link } from "react-router-dom"

const PostSummary = ({post}) => {


    return (

        <Link to={`/posts/${post.id}`}>
        <div>

        <img src={post.img_url} >
        </img>

        <h2>{post.title}</h2>

        <p>{post["created at"]}</p>

        </div>

        </Link>

    )
}
export default PostSummary