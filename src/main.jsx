import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// Form data
const appForm = document.querySelector('.form')
const text1 = document.querySelector('.filled-text1')
const text2 = document.querySelector('.filled-text2')
const text3 = document.querySelector('.filled-text3')
const image = document.querySelector('.image')
const submit = document.querySelector('.submit')

submit.addEventListener('click', (e) => {
  
})