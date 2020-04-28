import React, { useContext } from "react"
import { StateContext } from "../context"
import PostSummary from "../components/PostSummary"

const PostList = () => {

    const {posts, postLoading} = useContext(StateContext)

    return (

      <div>
          {postLoading && <p>Loading Posts...</p>}
          {posts && posts.map(post => <PostSummary post={post} />)}
      </div>

    )
}
export default PostList