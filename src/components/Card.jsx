import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import TravelImage1 from '../assets/pexels-tansu-topuzoglu-521333173-16721381.jpg'
import TravelImage2 from '../assets/img_3.jpg'
import TravelImage3 from '../assets/pexels-mrpixelwala-35168054.jpg'


function GridExample() {
    const images = [TravelImage1, TravelImage2 , TravelImage3]
  return (
    <Row xs={1} md={3} className="g-4 container mx-auto my-4">
      {images.map((imgsrc, idx) => (
        <Col key={idx}>
          <Card className='h-100 shadow-sm rounded-0 border-0 shadow-lg'> 
            <Card.Img variant="top"  style={{ height: '280px', 
                 backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imgsrc})`,
                  backgroundSize: 'cover',
                 backgroundPosition: 'center',
                 }}/>
            <Card.Body >
              <Card.Title>Special Destination {idx + 1}</Card.Title>
              <Card.Text>
                This is a beautiful travel destination. Plan your visit today for an unforgettable experience!.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default GridExample;