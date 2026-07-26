import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import ExperienceImage from "../assets/hero_bg_2.jpg";

function ExperienceSession() {
  return (
    <Container
      fluid
      className="px-3 px-md-5"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${ExperienceImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        minHeight: "90vh", 
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "60px",
        paddingBottom: "60px"
      }}
    >
      <div
        className="text-center d-flex flex-column justify-content-center align-items-center"
        style={{ maxWidth: "800px" }}
      >
       
        <div
          className="play-btn-circle"
          style={{
            border: "2px solid white",
            borderRadius: "50%",
            width: "80px",
            height: "80px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            cursor: "pointer",
            transition: "transform 0.3s ease, background-color 0.3s ease"
          }}
        >
          <FontAwesomeIcon icon={faPlay} className="fs-4 fs-md-2" style={{ marginLeft: "4px" }} />
        </div>

       
        <h3
          className="text-white text-uppercase mt-4 fw-bold fs-4 fs-md-2"
          style={{
            letterSpacing: "2px",
            lineHeight: "1.4"
          }}
        >
          Experience Our Outstanding Services
        </h3>
      </div>
    </Container>
  );
}

export default ExperienceSession;