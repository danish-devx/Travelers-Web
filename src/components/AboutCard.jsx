import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import AboutImage1 from '../assets/person_1.jpg'
import AboutImage2 from '../assets/person_2.jpg'
import AboutImage3 from '../assets/person_3.jpg'


function CardAbout() {
    const images = [
       {image:AboutImage1, personname: "Jean McMiller", dec: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur ab quas facilis obcaecati non ea, est odit repellat distinctio incidunt, quia aliquam eveniet quod deleniti impedit sapiente atque tenetur porro?"},
       {image:AboutImage2, personname: "Claire Peters", dec: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur ab quas facilis obcaecati non ea, est odit repellat distinctio incidunt, quia aliquam eveniet quod deleniti impedit sapiente atque tenetur porro?"},
       {image:AboutImage3, personname: "John Sawyer", dec: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur ab quas facilis obcaecati non ea, est odit repellat distinctio incidunt, quia aliquam eveniet quod deleniti impedit sapiente atque tenetur porro?"}
    ]
  return (
    <Row xs={1} md={3} className="g-4 container mx-auto my-4">
      {images.map((data, idx) => (
        <Col key={idx}>
          <Card className='h-100 shadow-sm rounded-0 border-0 shadow-lg'> 
            <Card.Img variant="top"  style={{ height: '280px', 
                 backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${data.image})`,
                  backgroundSize: 'cover',
                 backgroundPosition: 'center',
                 }}/>
            <Card.Body >
              <Card.Title>{data.personname}</Card.Title>
              <Card.Text>
                {data.dec}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default CardAbout;