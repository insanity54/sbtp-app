import qs from 'qs'

const shippoValidator = (address) => {
  const { name, street1, street2, city, state, postalCode, country } = address


    const validateAddressViaShippo = (params) => {
      let error = null
      return fetch(`/.netlify/functions/address-validator?${params}`)
        .then((res) => {
          console.log(res)
          return res.json()
        })
        .then((body) => {



          let { street1, street2, city, state, zip, object_state, messages } = body;

          // determine valid or invalid
          if (object_state === 'INVALID') {
            return {
              error: messages
            }
          } else {
            console.log('here be the validated addr')
            console.log(body)

            return {
              error,
              validatedAddress: {
                name: name.toUpperCase(),
                street1: street1.toUpperCase(),
                street2: street2.toUpperCase(),
                city: city.toUpperCase(),
                state: state.toUpperCase(),
                postalCode: zip.toUpperCase(),
                country: country.toUpperCase(),
              }
            }
          }
        })
        .catch((e) => {
          error = e;
          return {
            error
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
    return validateAddressViaShippo(params)
}




export default shippoValidator
