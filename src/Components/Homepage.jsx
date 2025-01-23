
import Nav from "./Nav";
import Top from "./Top";
import Hero from "./Hero";
import Services from "./Services";
import About from "./About";
import Why from "./Why";
import Footer from "./Footer";

export default function Homepage() {
  return (
    <div className="bg-white h-16">
      <Top />
      <Nav />
      <Hero />

      <Services />
      <About />
      <Why />
      <Footer />
    </div>
  );
}
