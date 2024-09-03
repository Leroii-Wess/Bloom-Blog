import { Card, Col, Container, Row } from "react-bootstrap";
import { articles } from "../constants/data";

function Articles() {
  return (
    <Container style={{ paddingTop: "4rem" }}>
      <h2 className="text-center my-4">- OUR ARTICLES -</h2>
      <Row>
        {articles.map((article, index) => (
          <Col md={4} key={index} className="mb-5">
            <Card className="border-0">
              <Card.Img
                variant="top"
                src={article.image}
                className="grayscale grayscale:hover cursor-pointer"
              />
              <Card.Body className="text-center">
                <Card.Title className="font-weight-bold text-uppercase  ">
                  <a
                    href="#"
                    className="icon-link icon-link-hover cursor-pointer text-decoration-none fs-4"
                  >
                    {article.title}
                  </a>
                </Card.Title>
                <Card.Text>{article.date}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Articles;
