import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import PageTransition from '@/components/common/PageTransition';
import SplashScreen from '@/components/common/SplashScreen';
import WhatsAppButton from '@/components/common/WhatsAppButton';
import ChatbotWidget from '@/components/chatbot/ChatbotWidget';
import ChatbotErrorBoundary from '@/components/chatbot/ChatbotErrorBoundary';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from '@/pages/Services';
import ServiceDetail from '@/pages/ServiceDetail';
import Solutions from '@/pages/Solutions';
import Products from '@/pages/Products';
import Work from '@/pages/Work';
import CaseStudy from '@/pages/CaseStudy';
import Process from '@/pages/Process';
import Blog from '@/pages/Blog';
import BlogArticle from '@/pages/BlogArticle';
import Careers from '@/pages/Careers';
import Contact from '@/pages/Contact';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import TermsAndConditions from '@/pages/TermsAndConditions';
import NotFound from '@/pages/NotFound';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />
          <Route
            path="/about"
            element={
              <PageTransition>
                <About />
              </PageTransition>
            }
          />
          <Route
            path="/services"
            element={
              <PageTransition>
                <Services />
              </PageTransition>
            }
          />
          <Route
            path="/services/:slug"
            element={
              <PageTransition>
                <ServiceDetail />
              </PageTransition>
            }
          />
          <Route
            path="/products"
            element={
              <PageTransition>
                <Products />
              </PageTransition>
            }
          />
          <Route
            path="/solutions"
            element={
              <PageTransition>
                <Solutions />
              </PageTransition>
            }
          />
          <Route
            path="/work"
            element={
              <PageTransition>
                <Work />
              </PageTransition>
            }
          />
          <Route
            path="/work/:slug"
            element={
              <PageTransition>
                <CaseStudy />
              </PageTransition>
            }
          />
          <Route
            path="/process"
            element={
              <PageTransition>
                <Process />
              </PageTransition>
            }
          />
          <Route
            path="/insights"
            element={
              <PageTransition>
                <Blog />
              </PageTransition>
            }
          />
          <Route
            path="/insights/:slug"
            element={
              <PageTransition>
                <BlogArticle />
              </PageTransition>
            }
          />
          <Route
            path="/careers"
            element={
              <PageTransition>
                <Careers />
              </PageTransition>
            }
          />
          <Route
            path="/contact"
            element={
              <PageTransition>
                <Contact />
              </PageTransition>
            }
          />
          <Route
            path="/privacy-policy"
            element={
              <PageTransition>
                <PrivacyPolicy />
              </PageTransition>
            }
          />
          <Route
            path="/terms-and-conditions"
            element={
              <PageTransition>
                <TermsAndConditions />
              </PageTransition>
            }
          />
          <Route
            path="*"
            element={
              <PageTransition>
                <NotFound />
              </PageTransition>
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <SplashScreen />
      <AnimatedRoutes />
      <WhatsAppButton />
      <ChatbotErrorBoundary>
        <ChatbotWidget />
      </ChatbotErrorBoundary>
    </BrowserRouter>
  );
}
