import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

import userImage from "../assets/hero_bg_1.jpg";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container className="py-5">
      <Row className="g-4 g-lg-5">
        <Col xs={12} lg={7}>
          <div className="bg-white p-4 p-md-5 rounded-3 shadow-sm border">
            <h3 className="fw-bold mb-4">Get In Touch</h3>
            <Form onSubmit={handleSubmit}>
              <Row className="g-3 mb-3">
                <Col xs={12} sm={6}>
                  <FloatingLabel
                    controlId="floatingFirstName"
                    label="First Name"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Enter First Name"
                      required
                    />
                  </FloatingLabel>
                </Col>
                <Col xs={12} sm={6}>
                  <FloatingLabel controlId="floatingLastName" label="Last Name">
                    <Form.Control
                      type="text"
                      placeholder="Enter Last Name"
                      required
                    />
                  </FloatingLabel>
                </Col>
              </Row>

              <FloatingLabel
                controlId="floatingEmail"
                label="Email address"
                className="mb-3"
              >
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  required
                />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingSubject"
                label="Subject"
                className="mb-3"
              >
                <Form.Control type="text" placeholder="Enter Subject" />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingMessage"
                label="Message / Comments"
                className="mb-4"
              >
                <Form.Control
                  as="textarea"
                  placeholder="Leave a message here"
                  style={{ height: "130px" }}
                  required
                />
              </FloatingLabel>

              <Button
                variant="danger"
                type="submit"
                className="w-100 py-3 fw-bold rounded-0"
                style={{ backgroundColor: "#eb3d4f", borderColor: "#eb3d4f" }}
              >
                Send Message
              </Button>
            </Form>
          </div>
        </Col>

        <Col xs={12} lg={5}>
          <div className="ps-lg-3">
            <div className="mb-4 p-4 rounded-3 bg-light border-start border-4 border-danger">
              <h5 className="fw-bold text-dark mb-1">Address</h5>
              <p className="text-muted mb-0">
                203 Fake St. Mountain View, San Francisco, California, USA
              </p>
            </div>

            <div className="mb-4 p-4 rounded-3 bg-light border-start border-4 border-danger">
              <h5 className="fw-bold text-dark mb-1">Phone</h5>
              <p className="text-muted mb-0">+1 232 3235 324</p>
            </div>

            <div className="mb-4 p-4 rounded-3 bg-light border-start border-4 border-danger">
              <h5 className="fw-bold text-dark mb-1">Email Address</h5>
              <p className="text-muted mb-0">youremail@domain.com</p>
            </div>

            <Card className="border-0 shadow-sm rounded-3 overflow-hidden mt-4">
              <Card.Img
                variant="top"
                src={userImage}
                style={{ height: "220px", objectFit: "cover" }}
              />
              <Card.Body className="p-4">
                <Card.Title className="fw-bold fs-5">More Info</Card.Title>
                <Card.Text className="text-muted small">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
                  ad iure porro mollitia architecto hic consequuntur. Distinctio
                  nisi perferendis dolore, ipsa consectetur? Fugiat quaerat eos
                  qui, libero neque sed nulla.
                </Card.Text>
                <Button
                  variant="outline-danger"
                  className="w-100 fw-semibold custom-hover-btn rounded-0"
                  style={{ color: "#eb3d4f", borderColor: "#eb3d4f" }}
                >
                  Learn More
                </Button>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
