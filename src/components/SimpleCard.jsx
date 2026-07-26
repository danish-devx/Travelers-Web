import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function TextExample() {
  const services = [
    {
      title: "Air Ticketing",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at."
    },
    {
      title: "Cruises",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at."
    },
    {
      title: "Tour Packages",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at."
    }
  ];

  return (
    <Container className="py-5">
    
      <Row xs={1} md={2} lg={3} className="g-4 justify-content-center">
        {services.map((item, idx) => (
          <Col key={idx}>
            <Card 
              className="border-0 h-100 rounded-3"
              style={{ 
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
                padding: "10px",
                transition: "transform 0.3s ease"
              }}
            >
              <Card.Body className="py-4 d-flex flex-column justify-content-between">
                <div>
                  <Card.Title className="fs-4 fw-bold mb-3">{item.title}</Card.Title>
                  <Card.Text className="text-muted">
                    {item.text}
                  </Card.Text>
                </div>
                <div className="mt-3">
                  <Card.Link href="#" className="text-danger fw-semibold text-decoration-none">
                    Learn More &rarr;
                  </Card.Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default TextExample;