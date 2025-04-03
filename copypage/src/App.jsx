import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import './App.css';
import Hero from './components/HOme/first/Hero';
import Navbar from './components/Navbar';
import Footer from './components/footer/Footer';
import AHero from './components/about/AHero';
import Blog from './components/Blog/Blog';
import Contect from './components/contect/Contect';
import Loader from './components/Loader';
import BlogDit from './components/Blog/BlogDit';
import Events from "./components/events/Events";
import Donation from "./components/dontion/Dontion";
import EventsDit from "./components/events/EventsDit";
import ErrorBoundary from './components/ErrorBoundary';
import DontionDit from './components/dontion/DontionDit';
import DonationForm from "./components/donete/Donate";
import PP from "./components/PP";
import TopHeader from "./components/TopHeader";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    scroll.scrollToTop({
      duration: 500,
      smooth: true
    });
  }, [pathname]);

  return null;
}

function AppContent() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleLoading = async () => {
      setIsLoading(true);
      try {
        // Simulate loading resources
        await new Promise(resolve => setTimeout(resolve, 800));
      } catch (error) {
        console.error('Loading error:', error);
      } finally {
        setIsLoading(false);
      }
    };

    handleLoading();
  }, [location.pathname]);

  if (isLoading) {
    return <Loader isLoading={true} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <TopHeader />
      <Navbar />
      <main>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<AHero />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-detail/:id" element={<BlogDit />} />
          <Route path="/contact" element={<Contect />} />
          <Route path="/events" element={<Events />} />
          <Route path="/event-details/:id" element={<EventsDit />} />
          <Route path="/donations" element={<Donation />} />
          <Route path="/BlogDit/:id" element={<BlogDit />} />
          {/* <Route path="/donation" element={<Donation />} /> */}
          <Route path="/donete" element={<DonationForm />} />
          <Route path="/donation/:id" element={<DontionDit />} />
          <Route path="/privacy-policy" element={<PP />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <AppContent />
      </ErrorBoundary>
    </Router>
  );
}

export default App;
