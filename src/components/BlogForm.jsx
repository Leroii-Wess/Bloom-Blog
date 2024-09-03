/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

function BlogForm({ onAddBlog }) {
  const [blogTitle, setBlogTitle] = useState("");
  const [blogAuthor, setBlogAuthor] = useState("");
  const [tag, setTag] = useState("");
  const [image] = useState("https://picsum.photos/100");

  // /picsum/200/300

  function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${formattedHours}:${formattedMinutes}${
      formattedHours > 12 ? "PM" : "AM"
    }`;
  }

  const handleAddBlog = (e) => {
    e.preventDefault();
    if (!blogTitle && !blogAuthor) return;

    const id = uuidv4();
    // const seed = Math.floor(100 + Math.random() * 900);
    const newBlog = {
      id,
      blogTitle,
      blogAuthor,
      tag,
      image: `${image}?=${id}`,
      time: getCurrentTime(),
    };

    onAddBlog(newBlog);
    setBlogTitle("");
    setBlogAuthor("");
    setTag("");
  };

  const handleSelectChange = (e) => {
    setTag(e.target.value);
  };

  return (
    <StyledForm>
      <Input
        onChange={(e) => setBlogTitle(e.target.value)}
        value={blogTitle}
        className="form-control"
        type="text"
        placeholder="Title..."
      />
      <Input
        onChange={(e) => setBlogAuthor(e.target.value)}
        value={blogAuthor}
        className="form-control"
        type="text"
        placeholder="Author"
      />
      <Select value={tag} onChange={handleSelectChange}>
        <option value="">- Select a tag -</option>
        <option value="technology">Technology</option>
        <option value="design">Design</option>
        <option value="ai">AI</option>
      </Select>
      <Button size="lg" onClick={handleAddBlog}>
        Post
      </Button>
    </StyledForm>
  );
}

export default BlogForm;

const StyledForm = styled.form`
  margin: 9% auto 0% auto;
  width: 60%;
  display: flex;
  gap: 3rem;
`;

const Input = styled.input`
  font-size: 1.5rem;

  &::placeholder {
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #999999;
  }
`;

const Select = styled.select`
  border: 1px solid #999999;
  padding: 8px 5px;
  border-radius: 7px;
`;
