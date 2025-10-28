import { useEffect, lazy, Suspense, useState } from "react";
import "./App.css";
import { useLanguageStore } from "./store/languageStore";
import Loader from "./components/Loader/Loader";

// Lazy loaded components
const Header = lazy(() => import("./components/Header/Header"));
const HeroSection = lazy(() => import("./components/HeroSection/HeroSection"));
const HistorySection = lazy(() =>
  import("./components/HistorySection/HistorySection")
);
const Footer = lazy(() => import("./components/Footer/Footer"));

function App() {
  const { language, initializeLanguage } = useLanguageStore();
  const [loading, setLoading] = useState(true);

  // simulate short delay for loader
  useEffect(() => {
    initializeLanguage();

    // փոքր դիլեյ, որպեսզի loader-ը մի քիչ երևա reload-ի ժամանակ
    const timer = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timer);
  }, [initializeLanguage]);

  if (loading) {
    return <Loader loading={true} />;
  }

  return (
    <Suspense fallback={<Loader loading={true} />}>
      <Header />
      <HeroSection language={language} />
      <HistorySection language={language} />
      <Footer language={language} />
    </Suspense>
  );
}

export default App;
