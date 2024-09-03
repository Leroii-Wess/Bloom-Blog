import Articles from "../components/Articles";
import Blogs from "../components/Blogs";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import PageNav from "../components/PageNav";

function Home() {
  return (
    <>
      <PageNav />
      <Hero />
      <Articles />
      <Blogs />
      <Footer />
    </>
  );
}

export default Home;
