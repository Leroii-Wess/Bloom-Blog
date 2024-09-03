import styled from "styled-components";

/* eslint-disable react/prop-types */
function BlogItem({ blog }) {
  return (
    <BlogContainer className="d-flex gap-5">
      <div>
        <img src={blog.image} className="rounded-2" />
      </div>

      <div className="d-flex flex-column w-100">
        <h3 className="fs-2 text-capitalize text-primary-emphasis">
          {blog.blogTitle}
        </h3>

        <span className="mt-auto text-primary-emphasis text-capitalize fs-4 fw-medium">
          {blog.blogAuthor}
        </span>
        <div className="d-flex gap-5 align-items-center justify-content-between">
          <span className="fw-light fs-5">{blog.time}</span>
          <Tag>{blog.tag}</Tag>
        </div>
      </div>
    </BlogContainer>
  );
}

export default BlogItem;

const BlogContainer = styled.div`
  border: 3px;
  width: 100%;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  padding: 1.5rem;
  cursor: pointer;
`;

const Tag = styled.span`
  font-size: 1rem;
  color: #fff;
  text-transform: uppercase;
  background-color: cornflowerblue;
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 50px;
`;
