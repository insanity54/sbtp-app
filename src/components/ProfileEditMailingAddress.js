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
import { mailingNameVar } from '../apollo/cache'
import { useMutation } from '@apollo/client'
import { navigate } from 'gatsby'
// import { string } from 'yup'
import { Formik } from 'formik'
import PropTypes from 'prop-types'
import UPDATE_NAME from '../operations/mutations/updateName'
import { getUser } from '../services/auth'

const ProfileEditMailingAddress = ({ user }) => {


  const [updateName, { loading, error }] = useMutation(UPDATE_NAME, {
    update(cache, { data: { updateName } }) {
      cache.modify({
        fields: {
          mailingName(mailingName = 'default name') {
            return mailingName
          }
        }
      })
    }
  })

  // const nameSchema = string()

  const validator = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "required";
    }
    return errors;
  }



  const onSubmit = async (values, { setSubmitting, setErrors }) => {
    console.log(`submitting ${JSON.stringify(values, null, 4)}`)
    await updateName({ variables: { id: getUser().id }})
    if (error) {
      setErrors() // @TODO is there an overall Formik error thingy???
    } else {
      navigate('/user/profile')
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
              name: mailingNameVar()
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
                <FormField name="name" htmlfor="name" label="Name" error={errors.name}>
                  <TextInput
                    name="name"
                    value={values?.name}
                    onChange={handleChange}
                  />
                </FormField>
                <Box direction="row" justify="end">
                  <Button label="Cancel" margin={{ right: 'small' }}></Button>
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
