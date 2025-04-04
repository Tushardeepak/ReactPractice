import React from 'react'
import ReactDOM from 'react-dom'

function App() {
  // localStorage
  localStorage.setItem('name', 'Tushar')
  localStorage.setItem('title', 'Deepak')
  console.log(localStorage.getItem('name'))
  localStorage.removeItem('title')
  console.log(localStorage.getItem('title'))

  // sessionStorage
  sessionStorage.setItem('name', 'tushar')
  sessionStorage.setItem('title', 'deepak')
  console.log(sessionStorage.getItem('name'))
  sessionStorage.removeItem('title')
  console.log(sessionStorage.getItem('title'))

  // Cookies
  document.cookie = `name=tushar; expires=` + new Date(2026, 3, 2).toUTCString()
  document.cookie = 'key=value; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/'
  console.log(document.cookie)

  // ✅ Use HttpOnly for sensitive data
  // ✅ Use Secure for HTTPS-only cookies
  // ✅ Use SameSite=Strict to prevent CSRF attacks
  // ✅ Use max-age or expires to control expiration

  return 'Storages'
}
ReactDOM.render(<App />, document.getElementById('root'))
