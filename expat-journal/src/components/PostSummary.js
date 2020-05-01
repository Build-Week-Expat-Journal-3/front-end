import React from "react";
import { Link } from "react-router-dom";
import {
  PostSummaryImages,
  PLSBackgroundContainer,
  PLSContainer,
  PostAwesomeTitleHeader,
  Container
} from "./styles";

const PostSummary = ({ post }) => {
  return (
    <Link to={`/posts/${post.id}`}>
      <PLSBackgroundContainer>
        <PLSContainer>
          <PostSummaryImages src={post.img_url} />
        </PLSContainer>
        <Container>
          <PostAwesomeTitleHeader>{post.title}</PostAwesomeTitleHeader>

          <p>{post["created at"].split("T")[0]}</p>
        </Container>
      </PLSBackgroundContainer>
    </Link>
  );
};
export default PostSummary;

