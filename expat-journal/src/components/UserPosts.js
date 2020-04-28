import React, { useEffect, useContext } from "react"
import { DispatchContext, StateContext } from "../context"
import { getPostsForUser } from "../actions"
import PostList from "../components/PostList"

const UserPosts = () => {

    const dispatch = useContext(DispatchContext)
    const {loggedInUserId} = useContext(StateContext)
    useEffect(() => {
        getPostsForUser(dispatch, loggedInUserId)
    }, [loggedInUserId])

    return (

      <div>
          <PostList />
      </div>

    )
}
export default UserPosts