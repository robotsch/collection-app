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
  db.collection('app-form')
  .doc()
  .set({
    field1: text1.value,
    field2: text2.value,
    field3: text3.value,
    // image: image.value
  })
  .then(() => {
    appForm.reset()
    console.log("Document successfully written!")
  })
  .catch((err) => {
    console.log("We have a problem: ", err)
  })
})