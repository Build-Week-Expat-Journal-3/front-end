import React, { useEffect, useContext } from "react"
import { DispatchContext, StateContext } from "../context"
import { getPostsForUser } from "../actions"
import PostList from "../components/PostList"
import { UserCreateDiv, UserContainerDiv, NavigationLink2 } from "./styles"


const UserPosts = () => {

    const dispatch = useContext(DispatchContext)
    const {loggedInUserId} = useContext(StateContext)
    useEffect(() => {
        getPostsForUser(dispatch, loggedInUserId)
    }, [loggedInUserId, dispatch])

    return (

      <UserContainerDiv>
          <UserCreateDiv>
             
          <NavigationLink2 to="/posts/create"> Create A New Post </NavigationLink2>
         
          </UserCreateDiv>
          <PostList />
      </UserContainerDiv>

    )
}
export default UserPosts