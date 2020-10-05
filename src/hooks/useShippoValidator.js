import { useState, useEffect } from 'react'
import qs from 'qs'
import PropTypes from 'prop-types'

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
          console.log(res)
          return res.json()
        })
        .then((body) => {
          setLoading(false)
          console.log('hello body')
          console.log(body)
          if (body.statusCode !== 200) {
            const b = JSON.parse(body.body)
            console.log('status code was NOT 200')
            console.log(b)
            setError(b.error)
          } else {
            console.log('status code was 200')
            let { street1, street2, city, state, zip } = body;
            console.log('here be the validated addr')
            console.log(body)
            setValidName(name.toUpperCase()) // shippo discards the name so we're just reusing the prop
            setValidStreet1(street1.toUpperCase())
            setValidStreet2(street2.toUpperCase())
            setValidCity(city.toUpperCase())
            setValidState(state.toUpperCase())
            setValidPostalCode(zip.toUpperCase())
            setValidCountry(country.toUpperCase())
          }
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

useShippoValidator.propTypes = {
  name: PropTypes.string.isRequired,
  street1: PropTypes.string.isRequired,
  street2: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  postalCode: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired
}

export default useShippoValidator
