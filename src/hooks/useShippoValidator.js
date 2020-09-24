import { useState, useEffect } from 'react'
import qs from 'qs'

const useShippoValidator = ({ name, street1, street2, city, state, postalCode, country }) => {
  const [validName, setValidName] = useState(name);
  const [validStreet1, setValidStreet1] = useState(null);
  const [validStreet2, setValidStreet2] = useState(null);
  const [validCity, setValidCity] = useState(null);
  const [validState, setValidState] = useState(null);
  const [validPostalCode, setValidPostalCode] = useState(null);
  const [validCountry, setValidCountry] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    /** validate address via Shippo API **/

    const validateAddressViaShippo = (params) => {
      setLoading(true)
      return fetch(`/.netlify/functions/address-validator?${params}`)
        .then((res) => {
          return res.json()
        })
        .then((address) => {
          setLoading(false)
          let { street1, street2, city, state, zip } = address;
          setValidName(name.toUpperCase()) // shippo discards the name so we're just reusing the prop
          setValidStreet1(street1.toUpperCase())
          setValidStreet2(street2.toUpperCase())
          setValidCity(city.toUpperCase())
          setValidState(state.toUpperCase())
          setValidPostalCode(zip.toUpperCase())
          setValidCountry(country.toUpperCase())
          console.log(address)
        })
        .catch((e) => {
          setError(e);
        })
    }

    let params = qs.stringify({
      name: name,
      street1: street1,
      street2: street2,
      city: city,
      state: state,
      postalCode: postalCode,
      country: country
    });
      console.log('params')
      console.log(params)
      validateAddressViaShippo(params)

    }, [
      name,
      street1,
      street2,
      city,
      state,
      postalCode,
      country
    ]
  )

  return {
    loading,
    error,
    validatedAddress: {
      name: validName,
      street1: validStreet1,
      street2: validStreet2,
      city: validCity,
      state: validState,
      postalCode: validPostalCode,
      country: validCountry,
    }
  }
}

export default useShippoValidator
