import { useState } from "react";
import { blogInfo } from "../constants/data";
import Slider from "./Slider";
import BlogWriteup from "./BlogWriteup";
import camper from "../assets/Camper-1.jpg";
import flowerShop from "../assets/Flower-Shop.jpg";
import { Container } from "react-bootstrap";
import styled from "styled-components";

function Blogs() {
  const [blogItems] = useState(blogInfo);

  return (
    <div className="bg-light py-5 d-flex justify-content-center">
      <BlogContainer className="mx-auto">
        <Container className="mb-5 pt-5">
          <Slider />
          <BlogWriteup item={blogItems[0]} />
        </Container>

        <Container className="mb-5">
          <img src={camper} className="w-100" />
          <BlogWriteup item={blogItems[1]} />
        </Container>

        <Container className="mb-5">
          <img src={flowerShop} className="w-100" />
          <BlogWriteup item={blogItems[2]} />
        </Container>
      </BlogContainer>
    </div>
  );
}

export default Blogs;

const BlogContainer = styled(Container)`
  width: 60%;
`;
