import React, { useContext } from "react"
import { StateContext } from "../context"
import PostSummary from "../components/PostSummary"
import Loader from "../media/images/loader.gif"
import { PostListContainer, IMGBackPContainer2 } from "./styles"

const PostList = () => {

    const {posts, postLoading} = useContext(StateContext)

    return (
<IMGBackPContainer2>
      <PostListContainer>
          {postLoading && <img  src={Loader} alt="loading..."/> }
          {posts && posts.map(post => <PostSummary post={post} />)}
      </PostListContainer>
</IMGBackPContainer2>
    )
}
export default PostList