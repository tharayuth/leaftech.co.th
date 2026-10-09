import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";
import ErrorBoundary from "./components/ErrorBoundary";
import { LangProvider } from "./i18n/LangProvider";
import Home from "./pages/Home";

export default function App() {
  return (
    <ErrorBoundary>
      <LazyMotion features={domAnimation} strict>
        <MotionConfig reducedMotion="user">
          <LangProvider>
            <Home />
          </LangProvider>
        </MotionConfig>
      </LazyMotion>
    </ErrorBoundary>
  );
}
