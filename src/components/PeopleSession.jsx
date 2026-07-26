import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";

import peopleImage from "../assets/pexels-guo-biao-1531616-2951280.jpg";
import peopleImage2 from "../assets/pexels-sehriban-karakaya-49565301-16788498.jpg";
import peopleImage3 from "../assets/03-japan.jpg";

function PeopleSession() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const testimonials = [
    { img: peopleImage, name: "James Martin", role: "Traveler" },
    { img: peopleImage2, name: "Sarah Jenkins", role: "Explorer" },
    { img: peopleImage3, name: "Alex Rover", role: "Backpacker" },
  ];

  return (
    <>
    
      <style>{`
        .testimonial-card-container {
          position: relative;
          width: 100%;
          max-width: 900px;
          display: flex;
          align-items: center;
        }

        .testimonial-img-box {
          width: 45%;
          box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.4);
          overflow: hidden;
        }

        .testimonial-text-box {
          text-align: center;
          padding: 40px 30px;
          position: absolute;
          right: 0;
          background-color: white;
          width: 60%;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
          z-index: 2;
        }

      
        @media (max-width: 768px) {
          .testimonial-card-container {
            flex-direction: column;
            justify-content: center;
          }
          .testimonial-img-box {
            width: 100%;
            max-width: 320px;
          }
          .testimonial-text-box {
            position: relative;
            width: 90%;
            margin-top: -40px; 
            padding: 25px 15px;
          }
        }
      `}</style>

      <Container fluid className="px-0">
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          variant="dark"
          className="py-5"
        >
          {testimonials.map((item, idx) => (
            <Carousel.Item key={idx}>
              <div
                style={{
                  width: "100%",
                  minHeight: "75vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                  padding: "20px",
                }}
              >
                <div className="testimonial-card-container">
                
                  <div className="testimonial-img-box">
                    <img
                      src={item.img}
                      alt={item.name}
                      style={{ width: "100%", height: "450px", objectFit: "cover" }}
                    />
                  </div>

                 
                  <div className="testimonial-text-box">
                    <p
                      style={{
                        fontSize: "1.05rem",
                        color: "#444",
                        lineHeight: "1.6",
                      }}
                    >
                      <q>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dignissimos ea ad sequi dolor ipsum. Ut impedit sint ipsam
                        officiis dolores eligendi, repudiandae minima.
                      </q>
                    </p>

                    <h6
                      style={{
                        fontStyle: "oblique",
                        marginTop: "20px",
                        color: "#222",
                      }}
                    >
                      __{item.name}{" "}
                      <span style={{ color: "#d9534f", fontWeight: "bold" }}>
                        {item.role}
                      </span>
                    </h6>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </>
  );
}

export default PeopleSession;