import React from "react"
import { Button, Box } from 'grommet'
import PropTypes from 'prop-types'
import { navigate } from '@reach/router'
import { useSiteMetadata } from "../../hooks/useSiteMetadata"

const ThirdPartyLogin = ({ icon, providerName }) => {

  const { apiURL } = useSiteMetadata();

  const doThirdPartyLogin = () => {
    let url = `${apiURL}/connect/${providerName.toLowerCase()}`
    console.log(url)
    navigate(url)
  }
  
  return (
    <Box>
      <Button 
        icon={icon} 
        label={'Log in with ' + providerName} 
        onClick={doThirdPartyLogin}
      ></Button>
    </Box>
  )
}

ThirdPartyLogin.propTypes = {
  providerName: PropTypes.string.isRequired,
  icon: PropTypes.element
}




export default ThirdPartyLogin
