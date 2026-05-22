import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Main from "./pages/Main";
import { useEffect } from "react";

/**
 * App Component
 * 
 * Root component of the application. Manages routing and handles global navigation effects
 * such as scrolling to the top on route changes and updating page metadata.
 * 
 * @component
 * @example
 * ```tsx
 * <App />
 * ```
 * 
 * @returns {JSX.Element} The main application routing structure
 * 
 * Features:
 * - Client-side routing using React Router v6
 * - Automatic scroll-to-top on navigation (except for POP navigation)
 * - Dynamic page title and meta description updates based on route
 */
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
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  );
}
export default App;
