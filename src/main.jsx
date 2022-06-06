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
const appForm = document.getElementById('.form')
const text1 = document.getElementById('.filled-text1')
const text2 = document.getElementById('.filled-text2')
const text3 = document.getElementById('.filled-text3')
const image = document.getElementById('.image')
const submit = document.getElementById('.submit')

if(submit){
  submit.addEventListener('click', () => {
    db.collection('test')
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
}