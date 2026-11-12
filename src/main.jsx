import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'swiper/css';
import './styles/webflow.css';
import './styles/custom-shared.css';
import './styles/lenis.css';
import './styles/brand.css';
import App from './App.jsx';

// NOTE: <StrictMode> is intentionally not used: the GSAP / SplitType / Lottie setup is
// attached imperatively to the DOM and must not be mounted twice in development.
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
