import { useEffect, useState } from "react";
import BlogForm from "../components/BlogForm";
import PageNav from "../components/PageNav";
import BlogPosts from "../components/BlogPosts";

function Blog() {
  const [blogs, setBlogs] = useState(() => {
    const storedBlogs = localStorage.getItem("blogs");
    if (!storedBlogs) return [];
    return JSON.parse(storedBlogs);
  });

  const handleAddBlog = (blog) => {
    setBlogs((blogs) => [...blogs, blog]);
    // console.log(blogs);
  };

  useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(blogs));
  }, [blogs]);

  return (
    <>
      <PageNav />
      <BlogForm onAddBlog={handleAddBlog} />
      <BlogPosts blogs={blogs} />
    </>
  );
}

export default Blog;
