import React from 'react'
import { createRoot } from 'react-dom/client';
import { StatePage } from './page/StatePage';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <StatePage />
  </React.StrictMode>
);
