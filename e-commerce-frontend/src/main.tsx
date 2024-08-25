import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { AppContextProvider } from './contexts/AppContext.tsx';

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <AppContextProvider>
    <App />
  </AppContextProvider>
  // </StrictMode>
);
