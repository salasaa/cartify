import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from '@/app.tsx';
import { About } from '@/routes/about.tsx';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { BrowserRouter, Route, Routes } from 'react-router';

/* StrictMode helps with identifying potential problems in on application / can be used or not, it doesn't matter */
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
);
