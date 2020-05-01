import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { DispatchContext, StateContext } from "../context";
import { getSinglePost, editPost, deletePost } from "../actions";
import { IMGBackContainer1, PostContainer, AwesomeButton3, PostStory, AwesomeTextArea, PostDiv, PostHeader, PostLocation} from "./styles"


const Post = () => {
  const [editing, setEditing] = useState(false);
  const [storyEdit, setStoryEdit] = useState("");
  const { id } = useParams();
  const dispatch = useContext(DispatchContext);
  const { currentPost, loggedInUserId } = useContext(StateContext);
  useEffect(() => {
    getSinglePost(dispatch, id);
  }, [id, dispatch]);
  const toggleEditing = (e) => {
    setStoryEdit(currentPost.story);
    setEditing(!editing);
  };

  const saveEdit = e => {
      e.preventDefault()
      editPost(dispatch, {id: id, story: storyEdit})
      setEditing(false)
 
  }
  const handleDeletePost = e => {
    e.preventDefault()
    deletePost(dispatch, id)
    setEditing(false)
}

  const handleChange = e => {
      e.persist()
      setStoryEdit(e.target.value)
  }
  return (
    <IMGBackContainer1>
      {currentPost && (
        <PostContainer>
          <img src={currentPost.img_url} alt={currentPost.title} />

          <PostHeader>{currentPost.title}</PostHeader>

          <PostLocation>Location: {currentPost.location}</PostLocation>

          {editing ? (
              <PostDiv>
            <AwesomeTextArea value={storyEdit} onChange={handleChange} name="storyEdit">
              {currentPost.story}
            </AwesomeTextArea>
            <AwesomeButton3 onClick={saveEdit}>Save</AwesomeButton3>
            </PostDiv>
          ) : (
            <PostStory>{currentPost.story}</PostStory>
          )}
          {currentPost.user_id == loggedInUserId ? (
            <PostDiv>
              <AwesomeButton3 onClick={toggleEditing}>{editing ? "Cancel Edit" : "Edit Post"}</AwesomeButton3>
              <AwesomeButton3 onClick={handleDeletePost}>Delete Post</AwesomeButton3>
            </PostDiv>
          ) : null}
        </PostContainer>
      )}
    </IMGBackContainer1>
  );
};
export default Post;
