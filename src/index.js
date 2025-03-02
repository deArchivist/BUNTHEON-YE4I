import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/tailwind.css';
import App from './App';
import { AppProvider } from './contexts/AppContext';
import 'katex/dist/katex.min.css';

// Log initial render attempt
console.log('Starting application...');

try {
  const container = document.getElementById('root');
  const root = createRoot(container);
  
  // Render with a simple try-catch for better error reporting
  root.render(
    <React.StrictMode>
      <AppProvider>
        <App />
      </AppProvider>
    </React.StrictMode>
  );
  
  console.log('Application rendered successfully');
} catch (error) {
  console.error('Failed to render application:', error);
  
  // Show fallback content
  document.getElementById('error-display').style.display = 'block';
  document.getElementById('error-display').innerHTML = 
    `<h2>App Failed to Initialize</h2>
     <p>Error: ${error.message}</p>
     <button onclick="window.location.reload()">Try Again</button>`;
}
