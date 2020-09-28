import React from "react"
import PropTypes from 'prop-types'
import { useQuery } from '@apollo/client'
import GET_USER from '../operations/queries/getUser'
import AddressWrapper from '../components/AddressWrapper'


const AddressContainer = ({ id }) => {
  const { loading, error, data } = useQuery(GET_USER, { variables: { id: id }});

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error.</div>
  return <AddressWrapper user={data.user} />
}

AddressContainer.propTypes = {
  id: PropTypes.string.isRequired
}

export default AddressContainer
