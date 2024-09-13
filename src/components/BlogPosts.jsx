import { useBlog } from "../context/BlogContext";
import BlogItem from "./BlogItem";
import styled from "styled-components";

function BlogPosts() {
  const { blogs } = useBlog();

  return (
    <BlogContainer>
      {blogs.map((blog, i) => (
        <BlogItem blog={blog} key={i} />
      ))}
    </BlogContainer>
  );
}

export default BlogPosts;

const BlogContainer = styled.div`
  margin-top: 4rem;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  padding: 2rem;
  display: grid;
  grid-template-columns: 2fr 2fr;

  gap: 2rem;
`;
