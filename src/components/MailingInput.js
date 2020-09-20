
import React from 'react'
import PropTypes from 'prop-types'
import { FormField, TextInput } from 'grommet'

const MailingInput = ({ id, label, value, onChange }) => {

  return (
    <FormField name={id} htmlfor={id} label={label}>
      <TextInput
        id={id}
        value={value}
        onChange={
          (evt) => {
            console.log(evt)
          }
        }
      />
    </FormField>
  )
}

MailingInput.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.func.isRequired
}

export default MailingInput
