import { useState } from 'react'

function Login() {
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')

  function handleFormSubmit(event) {
    event.preventDefault()
    const userData = {
      username: username,
      password: password,
    }
    console.log(userData)
  }

  return (
    <>
      <h1>Login form</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
           
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  )
}

export default Login
