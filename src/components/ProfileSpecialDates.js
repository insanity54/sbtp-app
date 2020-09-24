import React from "react"
import { Schedules } from 'grommet-icons'
import {
  Heading,
  Box,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  FormField,
  TextInput,
  DateInput,
} from 'grommet'
import PropTypes from 'prop-types'

const ProfileSpecialDates = ({ user }) => {


  return (
    <Box pad="medium">
      <Card
        width="large"
        background="background-front"
      >
        <CardHeader pad="medium">
          <Heading level="3">Special Dates</Heading>
          <Schedules size="large"/>
        </CardHeader>
        <CardBody pad={{horizontal: "medium"}}>
          <FormField label="Birthday">
            <DateInput
              format="mm/dd/yyy"
            ></DateInput>
          </FormField>
          <FormField label="Special Day">
            <DateInput
              format="mm/dd/yyy"
            ></DateInput>
          </FormField>
          <FormField
          label="Special Day Description"
          >
            <TextInput
            placeholder="e.g. Waifu's Birthday"
            >
            </TextInput>
          </FormField>
        </CardBody>
        <CardFooter pad="medium">
          <span>SBTP.XYZ loves to surprise customers with gifts on their special days.</span>
        </CardFooter>
      </Card>
    </Box>
  )
}

ProfileSpecialDates.propTypes = {
  user: PropTypes.object
}

export default ProfileSpecialDates
