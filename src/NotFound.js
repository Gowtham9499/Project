import React from 'react'
import { useNavigate } from 'react-router';

function NotFound() {
    let navigate = useNavigate()  
    function handleClick() {
        navigate(-1)
    }
  return (  
    <div>
        <h1>404 Not found</h1>
        <h1>oops ! you seem to be last</h1>
        <button onClick={handleClick}>go to previous page</button>
    </div>
  )
}

export default NotFound;