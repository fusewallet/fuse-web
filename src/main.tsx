import { HeroUIProvider } from '@heroui/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';

import 'animate.css';
import './assets/css/tailwind.css';
import './assets/css/fonts.scss';
import './assets/css/main.scss';
import './assets/iconfont/iconfont.js';

import App from './App';
import { Toaster } from './lib/sonner';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <HeroUIProvider>
                <App />
                <Toaster position="top-center" theme="dark" />
            </HeroUIProvider>
        </BrowserRouter>
    </StrictMode>,
);
