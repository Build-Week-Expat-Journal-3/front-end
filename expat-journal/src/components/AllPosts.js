import React, { useEffect, useContext } from "react"
import { useParams } from "react-router-dom"
import { DispatchContext } from "../context"
import { getAllPosts } from "../actions"
import PostList from "../components/PostList"

const AllPosts = () => {

    const dispatch = useContext(DispatchContext)
    useEffect(() => {
        getAllPosts(dispatch)
    }, [])

    return (

      <div>
          <PostList />
      </div>

    )
}
export default AllPosts