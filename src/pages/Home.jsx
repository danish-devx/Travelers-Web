import MyNavbar from "../components/Navbar";
import ControlledCarousel from "../components/Hero";
import GridExample from "../components/Card";
import TextExample from "../components/SimpleCard";
import PeopleSession from "../components/PeopleSession";
import AutoLayoutExample from "../components/footer";
import ExperienceSession from "../components/Experience";
import BlogGrid from "../components/BlogSession";
import BlogButton from "../components/Button";
import BookNowButton from "../components/Button2";

function HomePage() {
  return (
    <>
      <MyNavbar />
      <ControlledCarousel />
      <br />
      <br />
      <br />
      <GridExample />
      <br />
      <br />
      <br />
      <br />
      <TextExample />
      <h1
        style={{
          textAlign: "center",
          marginTop: "150px",
          textTransform: "uppercase",
          letterSpacing: "1px",
        }}
      >
        Testimonials
      </h1>
      <PeopleSession />
      <h1
        style={{
          textAlign: "center",
          marginTop: "150px",
          textTransform: "uppercase",
          letterSpacing: "1px",
        }}
      >
        Our Destinations
      </h1>
      <p
        style={{
          textAlign: "center",
          textTransform: "uppercase",
          letterSpacing: "1px",
        }}
      >
        Choose Your Next Destination
      </p>
      <GridExample />
      <GridExample />
      <br />
      <br />
      <br />
      <br />
      <ExperienceSession />
      <h1
        style={{
          textAlign: "center",
          marginTop: "150px",
          textTransform: "uppercase",
          letterSpacing: "1px",
        }}
      >
        Our Services
      </h1>
      <p
        style={{
          textAlign: "center",
          textTransform: "uppercase",
          letterSpacing: "1px",
        }}
      >
        We Offer The Following Services
      </p>
      <br />
      <br />
      <TextExample />
      <TextExample />
      <br />
      <br />
      <br />
      <h1
        style={{
          textAlign: "center",
          marginTop: "120px",
          textTransform: "uppercase",
          letterSpacing: "1px",
        }}
      >
        Our Blog
      </h1>
      <p
        style={{
          textAlign: "center",
          textTransform: "uppercase",
          letterSpacing: "1px",
        }}
      >
        See Our Daily News & Updates
      </p>
      <BlogGrid />
      <BlogButton />

      <h1
        style={{
          textAlign: "center",
          marginTop: "150px",
          textTransform: "uppercase",
          letterSpacing: "1px",
        }}
      >
        Want To Travel With Us?
      </h1>
      <BookNowButton />

      <AutoLayoutExample />
    </>
  );
}

export default HomePage;
