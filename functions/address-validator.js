const { SHIPPO_API_KEY } = process.env
const shippo = require('shippo')(SHIPPO_API_KEY)

exports.handler = async function (evt) {
  console.log(evt)

  return shippo.address.create({
    'name': evt.queryStringParameters.mailingName,
    'street1' : evt.queryStringParameters.street1,
    'street2' : evt.queryStringParameters.street2,
    'city' : evt.queryStringParameters.city,
    'state' : evt.queryStringParameters.state,
    'zip' : evt.queryStringParameters.zip,
    'country' : evt.queryStringParameters.country,
    'validate': true
  })
  .catch((err) => {
    return {
      statusCode: 500,
      body: JSON.stringify(err)
    }
  })
  .then((addr) => {
    // @TODO do something with addr
    console.log('the response from shippo')
    console.log(addr)
    return {
      statusCode: 200,
      body: JSON.stringify(addr)
    }
  })
}
