import React from 'react'
import { Deliver } from 'grommet-icons'
import {
  Heading,
  Box,
  Card,
  CardHeader,
  CardBody,
  FormField,
  TextInput,
  Button,
  Paragraph
} from 'grommet'

// import AddressChooser from './AddressChooser'
// import AddressValidator from './AddressValidator'
import { Formik } from 'formik'
import * as Yup from 'yup'
import PropTypes from 'prop-types'
import { useUpdateAddress } from '../operations/mutations/updateAddress'
import { getUser } from '../services/auth'
import shippoValidator from '../services/shippoValidator'
import { addressMode, suggestedAddress, enteredAddress } from '../apollo/cache'


const AddressSchema = Yup.object().shape({
  name: Yup.string()
    .max(128, 'Too long!')
    .required('Required'),
  street1: Yup.string()
    .max(128, 'Too long!')
    .required('Required'),
  street2: Yup.string()
    .max(128, 'Too long!'),
  city: Yup.string()
    .max(128, 'Too long!')
    .required('Required'),
  state: Yup.string()
    .length(2)
    .required('Required'),
  postalCode: Yup.string()
    .max(128, 'Too long!')
    .required('Required'),
  country: Yup.string()
    .max(128, 'Too long!')
    .required('Required')
})


const AddressEditor = ({ user }) => {
  const { mutate: updateAddress } = useUpdateAddress();



  const onSubmit = async (values, { setSubmitting, setStatus }) => {
    console.log(`submitting ${JSON.stringify(values, null, 4)}`)
    const { error, data } = await updateAddress({ variables: {
      id: getUser().id,
      name: values.name,
      street1: values.street1,
      street2: values.street2,
      city: values.city,
      state: values.state,
      postalCode: values.postalCode,
      country: values.country,
    }})

    if (typeof error === 'undefined') {
      let { error: addressErrors, validatedAddress } = await shippoValidator(values)
      if (addressErrors) {
        console.log(addressErrors)
        setStatus({ errors: addressErrors })
      } else {
        console.log('shippo validation succeeded')
        setSubmitting(false)
        enteredAddress(values)
        suggestedAddress(validatedAddress)
        addressMode('choose')
      }
    }

    console.log(data);
    console.log(error);

    // if (!error) setSubmitting(false)
    // else setStatus(JSON.stringify(error))

  }

  return (
    <Box pad="medium">
      <Card width="large" background="background-front">
        <CardHeader pad="medium">
          <Heading level="3">Edit Shipping Address</Heading>
          <Deliver size="large"/>
        </CardHeader>
        <CardBody pad="medium">
          <Formik
            initialValues={{
              name: user.name,
              street1: user.street1,
              street2: user.street2,
              city: user.city,
              state: user.state,
              postalCode: user.postalCode,
              country: user.country
            }}
            validationSchema={AddressSchema}
            onSubmit={onSubmit}
            initialStatus={{ errors: null }}
          >
            {({
              values,
              errors,
              status,
              handleChange,
              handleSubmit,
              setFieldValue,
              isSubmitting
            }) => (
              <form
                onSubmit={(evt) => {
                  evt.preventDefault();
                  handleSubmit();
                }}
              >
                <Box>
                  <FormField name="name" htmlfor="name" label="Name" error={errors.name}>
                    <TextInput
                      name="name"
                      value={values?.name}
                      onChange={handleChange}
                    />
                  </FormField>
                  <Box direction="row">
                    <FormField margin={{ right: "medium" }} name="street1" htmlfor="street1" label="Street Address 1" error={errors.street1} style={{ width: '50%' }}>
                      <TextInput
                        name="street1"
                        value={values?.street1}
                        onChange={handleChange}
                      />
                    </FormField>
                    <FormField name="street2" htmlfor="street2" label="Street Address 2" error={errors.street2} style={{ width: '50%' }}>
                      <TextInput
                        name="street2"
                        value={values?.street2}
                        onChange={handleChange}
                      />
                    </FormField>
                  </Box>
                  <Box direction="row">
                    <FormField margin={{right: "medium"}} name="city" htmlfor="city" label="City" error={errors.city} style={{ width: '50%' }}>
                      <TextInput
                        name="city"
                        value={values?.city}
                        onChange={handleChange}
                      />
                    </FormField>
                    <FormField margin={{right: "medium"}} name="state" htmlfor="state" label="State" error={errors.state} style={{ width: '10%' }}>
                      <TextInput
                        name="state"
                        value={values?.state}
                        onChange={handleChange}
                      />
                    </FormField>
                    <FormField name="postalCode" htmlfor="postalCode" label="ZIP/Postal Code" error={errors.postalCode} style={{ width: '30%'}}>
                      <TextInput
                        name="postalCode"
                        value={values?.postalCode}
                        onChange={handleChange}
                      />
                    </FormField>
                  </Box>
                  <FormField name="country" htmlfor="country" label="Country" error={errors.country}>
                    <TextInput
                      name="country"
                      value={values?.country}
                      onChange={handleChange}
                    />
                  </FormField>
                </Box>
                {status?.errors && <AddressEditorErrors errors={status.errors} />}
                <Box margin={{ top: "medium" }} direction="row" justify="end">
                  <Button label="Cancel" onClick={() => { addressMode('display') }} margin={{ right: 'small' }} ></Button>
                  <Button primary label={isSubmitting ? 'Saving...' : 'Save'} type="submit"></Button>
                </Box>
              </form>
            )}
          </Formik>
        </CardBody>
      </Card>
    </Box>
  )
}


const AddressEditorErrors = ({ errors }) => {
  return (
    <div>
      <Heading level="3" color="status-error">Error</Heading>
      <ul>
        {errors.map(e => (
          <li><Paragraph color="status-error">{e.text}</Paragraph></li>
        ))}
      </ul>
    </div>
  )
}

AddressEditor.propTypes = {
  user: PropTypes.object,
}

AddressEditorErrors.propTypes = {
  errors: PropTypes.array
}

export default AddressEditor
