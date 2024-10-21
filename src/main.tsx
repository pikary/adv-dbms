import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Provider } from "react-redux";
import { store } from './store'
import { GoogleOAuthProvider } from '@react-oauth/google';
import './assets/base.css'

const googleClientId = '229084646214-h4envqms90napi5k6os5r4u4us4f3j8o.apps.googleusercontent.com'
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
