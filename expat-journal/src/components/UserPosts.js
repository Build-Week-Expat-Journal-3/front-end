import React, { useEffect, useContext } from "react"
import { DispatchContext, StateContext } from "../context"
import { getPostsForUser } from "../actions"
import PostList from "../components/PostList"
import { NavigationLink } from "./styles"


const UserPosts = () => {

    const dispatch = useContext(DispatchContext)
    const {loggedInUserId} = useContext(StateContext)
    useEffect(() => {
        getPostsForUser(dispatch, loggedInUserId)
    }, [loggedInUserId, dispatch])

    return (

      <userContainerDiv>
          <userCreateDiv>
          <NavigationLink to="/posts/create"> Create A New Post </NavigationLink>
          </userCreateDiv>
          <PostList />
      </userContainerDiv>

    )
}
export default UserPosts