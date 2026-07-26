import MyNavbar from "../components/Navbar";
import PeopleSession from "../components/PeopleSession";
import AutoLayoutExample from "../components/footer";
import HeroBlogSession from "../components/Hero3";
import BlogGrid from "../components/BlogSession";
import BlogButton from "../components/Button";

function BlogPage() {
  return (
    <>
      <MyNavbar />
      <HeroBlogSession />
      <BlogGrid />
      <BlogGrid />
      <BlogGrid />

      <BlogButton />

      <AutoLayoutExample />
    </>
  );
}

export default BlogPage;
