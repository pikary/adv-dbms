import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Provider } from "react-redux";
import { store } from './store'
import { GoogleOAuthProvider } from '@react-oauth/google';
import './assets/base.css'

const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID || 'default_client_id';

createRoot(document.getElementById('root')!).render(
  <GoogleOAuthProvider clientId={googleClientId}>
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>
  </GoogleOAuthProvider>
  ,
)
