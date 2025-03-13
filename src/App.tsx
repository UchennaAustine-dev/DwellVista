import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import HomePage from "./pages/HomePage";
import ArticlePage from "./pages/ArticlePage";
import Footer from "./components/common/Footer";
import MainNav from "./components/common/MainNav";
import GDPRConsent from "./components/GDPRConsent";
import CategoryPage from "./pages/CategoryPage";
import NotFound from "./pages/NotFound";
import AdminPage from "./pages/AdminPage";
import AgentsPage from "./pages/AgentsPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import PropertiesPage from "./pages/PropertiesPage";
import ThemesPage from "./pages/ThemesPage";
import { InterstitialAd, AnchorAd } from "./components/ads/AdLayout";
import ScrollToTop from "./components/ScrollToTop";
import AdsPage from "./pages/AdsPage";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/properties" element={<PropertiesPage />} />
        <Route path="/agents" element={<AgentsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/themes" element={<ThemesPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/article/:slug" element={<ArticlePage />} />
        <Route path="/category/:slug" element={<CategoryPage />} />
        <Route path="/ads" element={<AdsPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col">
        <MainNav />
        <main className="flex-1">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
      <GDPRConsent />
      <InterstitialAd />
      <AnchorAd />
    </Router>
  );
}

export default App;
