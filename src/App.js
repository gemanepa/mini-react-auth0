import React from 'react';
import { useAuth0 } from "./react-auth0-spa";
import Loader from './Loader'

export default function App() {
  const { isAuthenticated, loginWithRedirect, logout, loading } = useAuth0();

  return loading ? <Loader /> :
  (
    <>
        {!isAuthenticated && 
            <>
                <p>You are not logged.</p>
                <button onClick={() => loginWithRedirect({})}>Log in</button>
            </>
        }
        {isAuthenticated && 
            <>
                <p>You are logged.</p>
                <button onClick={() => logout()}>Log out</button>
            </>
        }
    </>
  )
}