import CardAbout from "../components/AboutCard";
import AboutCompany from "../components/AboutSession";
import HeroSession from "../components/Hero2";
import MyNavbar from "../components/Navbar";
import PeopleSession from "../components/PeopleSession";
import BookNowButton from "../components/Button2";
import AutoLayoutExample from "../components/footer";

function AboutPage() {
  return (
    <>
      <MyNavbar />
      <HeroSession />
      <br />
      <br />
      <br />
      <AboutCompany />
      <h1
        style={{
          textAlign: "center",
          marginTop: "150px",
          textTransform: "uppercase",
          letterSpacing: "1px",
        }}
      >
        Our Team
      </h1>
      <CardAbout />

      <h1
        style={{
          textAlign: "center",
          marginTop: "150px",
          textTransform: "uppercase",
          letterSpacing: "1px",
        }}
      >
        What People Says
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
        Want To Travel With Us?
      </h1>

      <BookNowButton />

      <AutoLayoutExample />
    </>
  );
}

export default AboutPage;
