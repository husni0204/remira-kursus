import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

import 'bootstrap/dist/css/bootstrap.min.css';
// import './dist/css/main.css';
import '../src/dist/css/main.css';
import 'animate.css';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

import { BrowserRouter } from 'react-router-dom';
import { ScrollToTop } from './components/Kecil/index.ts';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <ScrollToTop />
            <App />
        </BrowserRouter>
    </StrictMode>,
);
