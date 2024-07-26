import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import ProfileSetupStep from "./pages/ProfileSetupStep";
import OtrasConsultas from "./pages/OtrasConsultas";
import LandingPage from "./pages/LandingPage";
import Desktop from "./pages/Desktop";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/otras-consultas":
        title = "";
        metaDescription = "";
        break;
      case "/landing-page":
        title = "";
        metaDescription = "";
        break;
      case "/desktop":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<ProfileSetupStep />} />
      <Route path="/otras-consultas" element={<OtrasConsultas />} />
      <Route path="/landing-page" element={<LandingPage />} />
      <Route path="/desktop" element={<Desktop />} />
    </Routes>
  );
}
export default App;
