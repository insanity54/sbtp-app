import React from "react"
import ThirdPartyLogin from './ThirdPartyLogin'

const ThirdPartyLogins = () => {
  let providers = [
    'Discord',
    'Facebook'
  ]
  return (
    <>
      {providers.map(name => (
        <ThirdPartyLogin key={name} providerName={name}/>
      ))}
    </>
  )
}

export default ThirdPartyLogins
