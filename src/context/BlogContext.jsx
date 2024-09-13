/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

const BlogContext = createContext();

function BlogProvider({ children }) {
  // BlogPosts
  const [blogs, setBlogs] = useState(() => {
    const storedBlogs = localStorage.getItem("blogs");
    if (!storedBlogs) return [];
    return JSON.parse(storedBlogs);
  });

  const handleAddBlogItem = (blog) => {
    setBlogs((blogs) => [...blogs, blog]);
  };

  useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(blogs));
  }, [blogs]);

  //BlogForm
  const [blogTitle, setBlogTitle] = useState("");
  const [blogAuthor, setBlogAuthor] = useState("");
  const [tag, setTag] = useState("");
  const [image] = useState("https://picsum.photos/100");

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

  return (
    <BlogContext.Provider
      value={{
        blogs,
        handleAddBlogItem,
        blogTitle,
        setBlogTitle,
        blogAuthor,
        setBlogAuthor,
        tag,
        setTag,
        image,
        getCurrentTime,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
}

function useBlog() {
  const context = useContext(BlogContext);

  return context;
}
export { useBlog };
export default BlogProvider;
