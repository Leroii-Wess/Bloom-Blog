/* eslint-disable react/no-unescaped-entities */
import { Container } from "react-bootstrap";
import profilePhoto from "../assets/about-me.jpg";
import gallery from "../assets/gallery.png";

function Footer() {
  return (
    <Container className="p-5">
      <Container className="mx-auto d-flex justify-content-around">
        <Container className="d-flex flex-column w-25 justify-content-center align-items-center ">
          <Container className="d-flex justify-content-center align-items-center h-50 w-50 pb-5">
            <img src={profilePhoto} className="rounded-circle h-100 w-100" />
          </Container>
          <Container className="d-flex flex-column justify-content-center align-items-center">
            <h3 className="text-uppercase">- Claire -</h3>
            <p className="text-secondary">
              Hi, my name is Clare and I'm a serial blogger. I love life and
              more than anything in the whole wide world, I love taking
              photographs. Oh and did I mention, I quite like blogging?
            </p>
          </Container>
        </Container>

        <Container className="d-flex flex-column w-25 align-items-center">
          <h3 className="text-uppercase">- Recent Posts -</h3>

          <ul className="d-flex flex-column align-items-center justify-content-center">
            <a
              href="#"
              className="text-secondary link-secondary text-decoration-none"
            >
              The Lollipop
            </a>
            <a
              href="#"
              className="text-secondary link-secondary text-decoration-none"
            >
              Running Through Nigeria
            </a>
            <a
              href="#"
              className="text-secondary link-secondary text-decoration-none"
            >
              The Apothecary
            </a>
            <a
              href="#"
              className="text-secondary link-secondary text-decoration-none"
            >
              The Flowers
            </a>
            <a
              href="#"
              className="text-secondary link-secondary text-decoration-none"
            >
              The Sunny Day
            </a>
          </ul>
        </Container>

        <Container className="d-flex flex-column w-25 align-items-center">
          <h3 className="text-uppercase">- Categories -</h3>

          <ul className="d-flex flex-column align-items-center justify-content-center">
            <a
              href="#"
              className="text-secondary link-secondary text-decoration-none"
            >
              Cute
            </a>
            <a
              href="#"
              className="text-secondary link-secondary text-decoration-none"
            >
              Fun
            </a>
            <a
              href="#"
              className="text-secondary link-secondary text-decoration-none"
            >
              Healthy
            </a>
            <a
              href="#"
              className="text-secondary link-secondary text-decoration-none"
            >
              Fitness
            </a>
          </ul>
        </Container>

        <Container className="d-flex flex-column w-25 align-items-center">
          <h3 className="text-uppercase">- Gallery -</h3>
          <Container className="h-75 w-75">
            <img src={gallery} className="w-100 h-100" />
          </Container>
        </Container>
      </Container>
    </Container>
  );
}

export default Footer;
