import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Partner from "./components/Partner/Partner";
import Services from "./components/Services/Services";
import Testimonials from "./components/Testimonials/Testimonials";
import "./scss/main.scss";
function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Partner />
        <Services />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}

export default App;
