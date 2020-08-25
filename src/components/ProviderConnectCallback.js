import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation, useParams } from "@reach/router"
import { parse } from 'query-string'
import { useSiteMetadata } from "../hooks/useSiteMetadata"

/**
 * The component which is routed to by visiting
 * `/connect/:providerName/callback`
 * This component takes the access_token from the provider and forwards it to Strapi backend.
 */
const ProviderConnectCallback = () => {
  const [text, setText] = useState('Loading...');
  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams();
  const siteMetadata = useSiteMetadata();
  
  useEffect(() => {
    
    const saveAuthToLocalStorage = async (res) => {
        // Successfully logged with Strapi
        // Now saving the jwt to use it for future authenticated requests to Strapi
        console.log('setting the jwt and username to localstorage');
        console.log(res);
        console.log(res.jwt);
        console.log(res.user.username);
        let { username, id, email, darkTheme, confirmed } = res.user;
        let user = { username, id, email, darkTheme, confirmed };
        localStorage.setItem('jwt', res.jwt);
        localStorage.setItem('user', JSON.stringify(user));
        setText('You have been successfully logged in. You will be redirected in a few seconds...');
        setTimeout(() => navigate('/user/profile', { replace: true }), 3000); // Redirect to homepage after 3 sec
    }
    
    
    const authenticateWithStrapi = async (params) => {
      // Successfully logged with the provider
      // Now log with strapi by using the access_token from the provider
      let res = await fetch(`${siteMetadata.apiURL}/auth/${params.providerName}/callback${location.search}`)
      if (res.status !== 200) {
        throw new Error(`Couldn't login to Strapi. Status: ${res.status}`);
      }
      console.log('yadda')
      let resJson = await res.json();
      console.log(resJson)
      return saveAuthToLocalStorage(resJson);
    }
    
    authenticateWithStrapi(params);


  }, [navigate, location, params]);
  
  return <div>I am a callback</div>
}





export default ProviderConnectCallback
