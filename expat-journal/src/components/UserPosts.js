import React, { useEffect, useContext } from "react"
import { NavLink } from "react-router-dom"
import { DispatchContext, StateContext } from "../context"
import { getPostsForUser } from "../actions"
import PostList from "../components/PostList"
import CreatePost from "../components/PostList"

const UserPosts = () => {

    const dispatch = useContext(DispatchContext)
    const {loggedInUserId} = useContext(StateContext)
    useEffect(() => {
        getPostsForUser(dispatch, loggedInUserId)
    }, [loggedInUserId, dispatch])

    return (

      <div>
          <NavLink to="/posts/create"> Create A New Post </NavLink>
          <PostList />
      </div>

    )
}
export default UserPosts