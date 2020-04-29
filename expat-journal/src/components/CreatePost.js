import React, { useContext, useState, useEffect } from "react";
import { createPost } from "../actions";
import { DispatchContext, StateContext } from "../context";

//import { AwesomeButton, AwesomeInput, FormContainerDiv, AwesomeLabel  } from "../styles"

const CreatePost = () => {
  const dispatch = useContext(DispatchContext)
  const { loggedInUserId } = useContext(StateContext)
  const emptyForm = {
    img_url: "",
    title: "",
    location: "",
    story: "",
    user_id: loggedInUserId
  }
  const [formState, setFormState] = useState(emptyForm);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    createPost(dispatch, formState)
    setFormState(emptyForm);
  };
  const handleChange = (e) => {
    e.persist();
    setFormState((previous) => ({
      ...previous,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="image">
          <input
            id="image"
            type="text"
            name="img_url"
            value={formState.img_url}
            onChange={handleChange}
            placeholder="Image Link:"
          />
        </label>
        <label htmlFor="title">
          <input
            id="title"
            type="text"
            name="title"
            value={formState.title}
            onChange={handleChange}
            placeholder="Tell The World"
          />
        </label>
        <label htmlFor="location">
          <input
            id="location"
            type="text"
            name="location"
            value={formState.location}
            onChange={handleChange}
            placeholder="Where Are You?"
          />
        </label>
        <label htmlFor="Story">
          <textarea
            id="story"
            type="text"
            name="story"
            value={formState.story}
            onChange={handleChange}
            placeholder="Tell Your Story?"
          />
        </label>
  <button onClick={handleSubmit}>Create Post</button>
      </form>
    </div>
  );
};

export default CreatePost;