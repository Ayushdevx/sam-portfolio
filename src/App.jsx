import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Tech from "./components/Tech";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { StarsCanvas } from "./components/canvas";
import HireMe from "./components/HireMe";
import ErrorBoundary from "./components/ErrorBoundary";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <ErrorBoundary>
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
        </ErrorBoundary>
        <ErrorBoundary>
          <About />
        </ErrorBoundary>
        <ErrorBoundary>
          <Experience />
        </ErrorBoundary>
        <ErrorBoundary>
          <Tech />
        </ErrorBoundary>
        <ErrorBoundary>
          <Works />
        </ErrorBoundary>
        <ErrorBoundary>
          <div className="relative z-0">
            <Contact />
            {/* <StarsCanvas /> */}
          </div>
        </ErrorBoundary>
        <ErrorBoundary>
          <HireMe />
        </ErrorBoundary>
        <ErrorBoundary>
          <Footer />
        </ErrorBoundary>
      </div>
    </BrowserRouter>
  );
};

export default App;
