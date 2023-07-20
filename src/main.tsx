// import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./App.tsx";
import * as FirebaseAuthService from "./authService/FirebaseAuthService.ts"

//Make sure connected with Firebase before web starting
FirebaseAuthService.serviceInit()

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
    <App/>
  // </React.StrictMode>,
)
