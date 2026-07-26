import Container from "react-bootstrap/Container";
import ExperienceImage from "../assets/hero_bg_2.jpg";

function HeroBlogSession() {
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
       
        
        <h3
          className="text-white text-uppercase mt-4 fw-bold fs-1 fs-md-2"
          style={{
            letterSpacing: "2px",
            lineHeight: "1.4"
          }}
        >
            Blog Posts
        </h3>
      </div>
    </Container>
  );
}

export default HeroBlogSession;