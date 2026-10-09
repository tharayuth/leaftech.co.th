// Self-hosted fonts: Poppins (headings), Inter (body), Noto Sans Thai (Thai script)
import "@fontsource/poppins/latin-500.css";
import "@fontsource/poppins/latin-600.css";
import "@fontsource/poppins/latin-700.css";
import "@fontsource-variable/inter/wght.css";
import "@fontsource-variable/noto-sans-thai/wght.css";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
