import React from "react"
import {
  CardBody,
  FormField,
  TextInput,
  DateInput,
  Button,
  Box,
} from 'grommet'
import PropTypes from 'prop-types'
import { useUpdateSpecialDates } from '../operations/mutations/updateSpecialDates'
import { Formik } from 'formik'
import * as Yup from 'yup'


const SpecialDateSchema = Yup.object().shape({
  specialDate: Yup.date()
    .required('Required'),
  specialDateDescription: Yup.string()
    .max(128, 'Too long!')
    .required('Required'),
  birthDate: Yup.date()
    .required('Required!')
})

const SpecialDatesEditor = ({ user, onSave, onCancel }) => {
  const { mutate: updateSpecialDates, loading } = useUpdateSpecialDates();
  const doSubmit = async (values, { setSubmitting, setStatus }) => {
    console.log('doSubmit')
    const { error } = await updateSpecialDates({
      variables: {
        specialDate: values.specailDate,
        birthDate: values.birthDate,
        specialDateDescription: values.specialDateDescription
      }
    })

    if (typeof error !== 'undefined') {
      setStatus({ error: error })
    } else {
      setSubmitting(false)
      onSave()
    }
  }

  return (
    <CardBody pad={{horizontal: "medium"}}>
      <Formik
        initialValues={{
          specialDate: user?.specialDate || '',
          specialDateDescription: user?.specialDateDescription || '',
          birthDate: user?.birthDate || ''
        }}
        validationSchema={SpecialDateSchema}
        onSubmit={doSubmit}
        initialStatus={{ error: null }}
      >{({
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
          <FormField label="Birthday" width="20em" error={errors.birthDate}>
            <DateInput
              name="birthDate"
              calendarProps={{size: "medium"}}
              format="mm/dd/yyyy"
              value={values?.birthDate}
              onChange={handleChange}
            ></DateInput>
          </FormField>
          <FormField label="Special Day" width="20em" error={errors.specialDate}>
            <DateInput
              name="specialDate"
              calendarProps={{size: "medium"}}
              format="mm/dd/yyyy"
              value={values?.specialDate}
              onChange={(evt) => {handleChange(evt.value)}}
            ></DateInput>
          </FormField>
          <FormField
            label="Special Day Description"
            error={errors.specialDateDescription}
          >
            <TextInput
              name="specialDateDescription"
              placeholder="e.g. Waifu's Birthday"
              value={values?.specialDateDescription}
              onChange={handleChange}
            ></TextInput>
          </FormField>
          <Box margin={{ top: "medium" }} direction="row" justify="end">
            <Button label="Cancel" onClick={onCancel} margin={{ right: 'small' }} ></Button>
            <Button primary label={loading ? 'Saving...' : 'Save'} type="submit"></Button>
          </Box>
        </form>)}
      </Formik>
    </CardBody>
  )
}

SpecialDatesEditor.propTypes = {
  user: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
}

export default SpecialDatesEditor
