// import React from 'react'
import { useState } from "react";
export default function Login() {
    const [accesstoken, setAccesstoken] = useState('')
    const handlelogin = () => {
        // console.log("handle login clicked")
        const CLIENT_ID = "105564751172-mub8ci4e60d0dtmai5u48ss2gr39c9oc.apps.googleusercontent.com";
        const REDIRECT_URL = "http://localhost:3000/inbox";
        // const SCOPE = "http://www.googleapis.com/auth/gmail.readonly"; //this line
        //  show error
        const SCOPE = "https://www.googleapis.com/auth/gmail.readonly ";
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

