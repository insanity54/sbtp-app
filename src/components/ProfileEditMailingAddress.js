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
  Button
} from 'grommet'
import {
  nameVar,
  street1Var,
  street2Var,
  cityVar,
  stateVar,
  postalCodeVar,
  countryVar
} from '../apollo/cache'
import { useMutation } from '@apollo/client'
import { navigate } from 'gatsby'
// import { string } from 'yup'
import { Formik } from 'formik'
import PropTypes from 'prop-types'
import UPDATE_ADDRESS from '../operations/mutations/updateAddress'
import { getUser } from '../services/auth'

const ProfileEditMailingAddress = ({ user }) => {

  const [updateAddress, { loading, error }] = useMutation(UPDATE_ADDRESS, {
    update(cache, { data: { updateAddress } }) {
      cache.modify({
        fields: {
          name(name = 'default name') {
            return name
          },
          street1(street1 = 'default street1') {
            return street1
          },
          street2(street2 = 'default street2') {
            return street2
          },
          city(city = 'default city') {
            return city
          },
          state(state = 'default state') {
            return state
          },
          postalCode(postalCode = 'default postalCode') {
            return postalCode
          },
          country(country = 'default country') {
            return country
          },
        }
      })
    }
  })

  // const nameSchema = string()

  const validator = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "name is required"
    }
    if (!values.street1) {
      errors.street1 = "street1 is required"
    }
    return errors;
  }




  const onSubmit = async (values, { setSubmitting, setErrors }) => {
    console.log(`submitting ${JSON.stringify(values, null, 4)}`)
    await updateAddress({ variables: {
      id: getUser().id,
      name: values.name,
      street1: values.street1,
      street2: values.street2,
      city: values.city,
      state: values.state,
      postalCode: values.postalCode,
      country: values.country,
    }})
    if (error) {
      setErrors({ name: 'uh oh '}) // @TODO is there an overall Formik error thingy???
    } else {
      navigate('/user/profile/shipping/validator')
    }
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
            validate={validator}
            onSubmit={onSubmit}
          >
            {({
              values,
              errors,
              handleChange,
              handleSubmit,
              setFieldValue
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
                    <FormField name="postalCode" htmlfor="postalCode" label="ZIP/Postal Code" error={errors.postalCode}>
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
                <Box margin={{ top: "medium" }} direction="row" justify="end">
                  <Button label="Cancel" margin={{ right: 'small' }} onClick={() => { navigate('/user/profile') }}></Button>
                  <Button primary label={loading ? 'Saving...' : 'Save'} type="submit"></Button>
                </Box>
              </form>
            )}
          </Formik>
        </CardBody>
      </Card>
    </Box>
  )
}

ProfileEditMailingAddress.propTypes = {
  user: PropTypes.object
}

export default ProfileEditMailingAddress
