import React, { useEffect, useContext } from "react"
import { useParams } from "react-router-dom"
import { DispatchContext, StateContext } from "../context"
import { getSinglePost } from "../actions"

const Post = () => {
    const {id} = useParams()
    const dispatch = useContext(DispatchContext)
    const { currentPost } = useContext(StateContext)
    const state = useContext(StateContext)
    useEffect(() => {
        getSinglePost(dispatch, id)
        console.log(state)
        
    }, [id])
  
    return (

        <>
        {currentPost && <div>

        <img src={currentPost.img_url} />

        <h2>{currentPost.title}</h2>

        <p>{currentPost.location}</p>

        <p>{currentPost.story}</p>

        </div>}

            </>


    )
}
export default Post