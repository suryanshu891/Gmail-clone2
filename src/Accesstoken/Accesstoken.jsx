import React, { useEffect, useState } from 'react';

function Accesstoken() {
  const [accessToken, setAccessToken] = useState('');

  const handleLogin = () => {
    const CLIENT_ID = '877931587159-k4ear7tim3tfm4fgqjnpa27mc5iq8k8m.apps.googleusercontent.com';
    const REDIRECT_URI = "http://localhost:3000";
    const SCOPE = "https://www.googleapis.com/auth/gmail.readonly";
    const AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}&response_type=token`;
    window.location.href = AUTH_URL;
  };

  const getAccessToken = () => {
    const url = window.location.href;
    const token = url.match(/access_token=([^&]+)/);
    if (token && token[1]) {
      localStorage.setItem("Token", token[1]);
      setAccessToken(token[1]);
    }
  };

  useEffect(() => {
    getAccessToken();
  }, []);

  const getEmailData = () => {
    let token = localStorage.getItem("Token");
    let url = "https://gmail.googleapis.com/gmail/v1/users/me/messages";
    const options = {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    };
    fetch(url, options)
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.log('Error in fetching mails', error));
  };

  const fetchMail = (id) => {
    let token = localStorage.getItem("Token");
    const options = {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    };
    let url = `https://gmail.googleapis.com/gmail/v1/users/me/messages/${id}`;
    fetch(url, options)
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.log('Error in fetching mail', error));
  };

  return (
    <div>
      {accessToken ? (
        <div>
          <h1>Access token</h1>
          <p>Access Token: {accessToken}</p>
        </div>
      ) : (
        <>
          <button onClick={handleLogin}>Login with Google</button>
          <button onClick={getEmailData}>Get Emails</button>
          <button onClick={() => fetchMail('18e462bcf161bc72')}>Fetch Emails</button>
        </>
      )}
    </div>
  );
}

export default Accesstoken;
