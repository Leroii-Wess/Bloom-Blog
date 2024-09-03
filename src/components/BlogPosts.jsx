/* eslint-disable react/prop-types */
// import { Container } from "react-bootstrap";
// import { useEffect, useState } from "react";
import BlogItem from "./BlogItem";
import styled from "styled-components";

function BlogPosts({ blogs }) {
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
  /* border: 1px solid #999; */
  padding: 2rem;
  display: grid;
  grid-template-columns: 2fr 2fr;

  gap: 2rem;
`;
