// import React from 'react'
import { useState } from "react";
export default function Login() {
    const [accesstoken, setAccesstoken] = useState('')
    const handlelogin = () => {
        const CLIENT_ID = "161718151401-pr8o3mqjj0o5ss2m2arlfitcu3qsmv7a.apps.googleusercontent.com";
        const REDIRECT_URL = "http://localhost:3000/inbox";
        const SCOPE = 'https://mail.google.com/';
        const AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&scope=${SCOPE}&response_type=token`;
        window.location.href = AUTH_URL
    }
    const getAccessToken = () => {
      
    }

    return (
        <>
            <div>
                {accesstoken ? (
                    <div>
                        <h1>Access token otaines</h1>
                        <p>Access Token:{accesstoken}</p>
                    </div>) : (
                    <>
                        <button onClick={handlelogin}>Login with google</button>
                        {/* <button onClick={() => getEmailData()}>get Email</button>
                        <button onClick={() => fetchMail("18e55f97d37b4be1")}>Fetch Emails</button> */}
                    </>
                )
                }
            </div>


        </>
    )
}

