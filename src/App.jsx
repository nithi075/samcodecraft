import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Works from './pages/Works';
import About from './pages/About';
import Placeholder from './pages/Placeholder';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/works" element={<Works />} />
      <Route path="/about" element={<About />} />
      <Route path="/works/:slug" element={<Placeholder />} />
      <Route path="*" element={<Placeholder title="404 – Page not found" />} />
    </Routes>
  );
}
