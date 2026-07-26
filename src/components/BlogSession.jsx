import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import BlogImage1 from "../assets/hero_bg_1.jpg";
import BlogImage2 from "../assets/hero_bg_2.jpg";

function BlogGrid() {
  const blogs = [
    {
      img: BlogImage1,
      title: "How to Plan Your Vacation",
      date: "July 22, 2026",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit."
    },
    {
      img: BlogImage2,
      title: "Top 10 Places to Visit This Year",
      date: "July 20, 2026",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit."
    }
  ];

  return (
    <Container className="py-5">
     
      <Row xs={1} md={2} className="g-4">
        {blogs.map((item, idx) => (
          <Col key={idx}>
            <Card className="border-0 shadow-sm h-100  overflow-hidden">
             
              <div style={{ overflow: "hidden", height: "330px" }}>
                <Card.Img
                  variant="top"
                  src={item.img}
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                    transition: "transform 0.3s ease"
                  }}
                  className="card-img-hover"
                />
              </div>

              <Card.Body className="p-4 d-flex flex-column">
                <span className="text-danger fw-bold small mb-2">{item.date}</span>
                <Card.Title className="fw-bold fs-4 mb-3">{item.title}</Card.Title>
                <Card.Text className="text-muted flex-grow-1">
                  {item.desc}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default BlogGrid;