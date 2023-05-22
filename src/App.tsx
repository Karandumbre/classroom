import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import IPhone88 from "./pages/IPhone88";
import IPhone87 from "./pages/IPhone87";
import IPhone86 from "./pages/IPhone86";
import IPhone85 from "./pages/IPhone85";
import IPhone84 from "./pages/IPhone84";
import IPhone83 from "./pages/IPhone83";
import IPhone82 from "./pages/IPhone82";
import IPhone81 from "./pages/IPhone81";
import Dashboard from "./pages/Dashboard";
import Dashboard1 from "./pages/Dashboard1";
import Dashboard2 from "./pages/Dashboard2";
import Dashboard3 from "./pages/Dashboard3";
import Dashboard4 from "./pages/Dashboard4";
import Dashboard5 from "./pages/Dashboard5";
import Dashboard6 from "./pages/Dashboard6";
import Dashboard7 from "./pages/Dashboard7";
import { useEffect } from "react";

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
      case "/iphone-8-7":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-8-6":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-8-5":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-8-4":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-8-3":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-8-2":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-8-1":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard1":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard2":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard3":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard4":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard5":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard6":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard7":
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
      <Route path="/" element={<IPhone88 />} />
      <Route path="/iphone-8-7" element={<IPhone87 />} />
      <Route path="/iphone-8-6" element={<IPhone86 />} />
      <Route path="/iphone-8-5" element={<IPhone85 />} />
      <Route path="/iphone-8-4" element={<IPhone84 />} />
      <Route path="/iphone-8-3" element={<IPhone83 />} />
      <Route path="/iphone-8-2" element={<IPhone82 />} />
      <Route path="/iphone-8-1" element={<IPhone81 />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard1" element={<Dashboard1 />} />
      <Route path="/dashboard2" element={<Dashboard2 />} />
      <Route path="/dashboard3" element={<Dashboard3 />} />
      <Route path="/dashboard4" element={<Dashboard4 />} />
      <Route path="/dashboard5" element={<Dashboard5 />} />
      <Route path="/dashboard6" element={<Dashboard6 />} />
      <Route path="/dashboard7" element={<Dashboard7 />} />
    </Routes>
  );
}
export default App;
