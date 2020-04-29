import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { DispatchContext, StateContext } from "../context";
import { getSinglePost, editPost, deletePost } from "../actions";


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
    <>
      {currentPost && (
        <div>
          <img src={currentPost.img_url} alt={currentPost.title} />

          <h2>{currentPost.title}</h2>

          <p>{currentPost.location}</p>

          {editing ? (
              <>
            <textarea value={storyEdit} onChange={handleChange} name="storyEdit">
              {currentPost.story}
            </textarea>
            <button onClick={saveEdit}>Save</button>
            </>
          ) : (
            <p>{currentPost.story}</p>
          )}
          {currentPost.user_id == loggedInUserId ? (
            <div>
              <button onClick={toggleEditing}>{editing ? "Cancel Edit" : "Edit Post"}</button>
              <button onClick={handleDeletePost}>Delete Post</button>
            </div>
          ) : null}
        </div>
      )}
    </>
  );
};
export default Post;
