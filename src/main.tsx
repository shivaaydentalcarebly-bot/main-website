import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App';
import './styles.css';
import './portrait-fix.css';
import './map-fix.css';
import './clinic-sections.css';
createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>);
