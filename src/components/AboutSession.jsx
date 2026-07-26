import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import image from "../assets/pexels-arina-dmitrieva-66352626-10130602.jpg";

function AboutCompany() {
  return (
    <Container className="py-5">
      <Row className="align-items-center g-4 g-lg-5">
       
        <Col xs={12} md={6}>
          <div className="overflow-hidden  shadow-lg">
            <img
              src={image}
              alt="About Our Company"
              className="img-fluid w-100"
              style={{
                maxHeight: "450px",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        </Col>

        
        <Col xs={12} md={6}>
          <div className="ps-md-2">
            <h6
              className="text-danger text-uppercase fw-bold mb-2"
              style={{ letterSpacing: "1px" }}
            >
              Welcome To Our Site
            </h6>
            <h2 className="fw-bold mb-3 display-6">About Company</h2>
            <p
              className="text-secondary leading-relaxed mb-4"
              style={{ lineHeight: "1.7" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
              cumque eius modi expedita accusamus alias error totam ab magnam a
              mollitia magni, distinctio temporibus optio illo sapiente, odio
              unde natus.
            </p>

          
            <ul className="list-unstyled mb-0">
              <li className="d-flex align-items-center mb-2 text-dark fs-6">
                <span className="text-danger me-2 fs-5">✓</span>
                Vitae cumque eius modi expedita
              </li>
              <li className="d-flex align-items-center mb-2 text-dark fs-6">
                <span className="text-danger me-2 fs-5">✓</span>
                Totam at maxime Accusantium
              </li>
              <li className="d-flex align-items-center text-dark fs-6">
                <span className="text-danger me-2 fs-5">✓</span>
                Distinctio temporibus
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutCompany;
