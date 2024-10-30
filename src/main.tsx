import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Provider } from "react-redux";
import { store } from './store'
import { GoogleOAuthProvider } from '@react-oauth/google';
// import { StripeProvider } from '@stripe/react-stripe-js';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from '@stripe/react-stripe-js';
import './assets/base.css'

const STRIPE_API_KEY = 'pk_test_51QFk16CAPgGmoUBcuCubLOZt1I1Xnip7Vz8s5Vyzt5RqC69U8x5A9p3MXgxi03MFoiXTxOjL2UQkZ7ZHExSJ3YX700Vjyqb3er'
const stripePromise = loadStripe(STRIPE_API_KEY)

const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID || 'default_client_id';

createRoot(document.getElementById('root')!).render(
  // <StripeProvider stripe>
  <GoogleOAuthProvider clientId={googleClientId}>
    <StrictMode>
      <Provider store={store}>
        <Elements stripe={stripePromise}>
          <App />
        </Elements>
      </Provider>
    </StrictMode>
  </GoogleOAuthProvider>
  // </StripeProvider>

  ,
)
