import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';    
import Button from 'react-bootstrap/Button'; 

function AutoLayoutExample() {
  return (
    <footer className="bg-dark text-white py-5 mt-5"style={{height:'65vh'}}>
      <Container>
        <Row className="gy-4" style={{paddingTop:'65px'}}>
         
          <Col md={4}>
            <h3 className="h4 text-white mb-3">About Travelers</h3>
            <p className="text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe pariatur reprehenderit vero atque, consequatur id ratione, et non dignissimos culpa?
            </p>
          </Col>

         
          <Col md={3}>
            <h3 className="h4 text-white mb-3">Navigations</h3>
            <div className="d-flex flex-column gap-2">
              <a href="#" className="text-secondary text-decoration-none">Home</a>
              <a href="#" className="text-secondary text-decoration-none">About</a>
              <a href="#" className="text-secondary text-decoration-none">Blog</a>
              <a href="#" className="text-secondary text-decoration-none">Contact</a>
            </div>
          </Col>

        
          <Col md={5}>
            <h3 className="h4 text-white mb-3">Subscribe Newsletter</h3>
            <p className="text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit minima minus odio.
            </p>
            <Form className="d-flex">
              <Form.Control
                type="email"
                placeholder="Enter your email"
                className="me-2 rounded-0"
                aria-label="Email"
              />
              <Button variant="danger" className="rounded-0">
                Subscribe
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default AutoLayoutExample;