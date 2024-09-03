/* eslint-disable react/no-unescaped-entities */
import { Button, Container } from "react-bootstrap";

function BlogWriteup({ ...item }) {
  return (
    <Container className="bg-white p-5">
      <Container className="d-flex justify-content-center align-items-center flex-column">
        <h3 className="fs-4 fw-medium text-uppercase text-primary">
          {item.item.title}
        </h3>
        <p className="fs-4 fw-medium text-uppercase text-primary">
          {item.item.date} <span className="text-warning">·</span>{" "}
          {item.item.comments} COMMENTS <span className="text-warning">·</span>{" "}
          BY {item.item.author}
        </p>
      </Container>

      <Container className="px-5">
        <p className="text-secondary ">{item.item.text}</p>

        <Container className="my-5 d-flex flex-column px-5">
          {item.item.quote && (
            <p className="text-secondary text-uppercase fs-1">
              "{item.item.quote}"
            </p>
          )}
          {item.item.quoteAuthor && (
            <p className="fs-1 text-secondary">- {item.item.quoteAuthor}</p>
          )}
        </Container>

        <Container className="d-flex justify-content-center">
          <Button className="btn btn-primary btn-lg" type="button">
            {item.item.buttonLabel}
          </Button>
        </Container>

        <Container className="mt-5 fs-4 text-secondary d-flex justify-content-center align-items-center text-uppercase">
          saved:&nbsp;
          <span className="text-primary">{item.item.tags.join(", ")}</span>
        </Container>
      </Container>
    </Container>
  );
}

export default BlogWriteup;
