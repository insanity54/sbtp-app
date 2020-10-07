import React from "react"
import {
  Box,
  Heading,
  Paragraph,
  CardBody,
  CardFooter,
  Button,
} from 'grommet'
import { Edit } from 'grommet-icons'
import PropTypes from 'prop-types'
import { DateTime } from 'luxon'

const SpecialDatesDisplay = ({ user, onEdit }) => {


  return (
    <div>
      <CardBody pad={{horizontal: "medium"}}>
        <Box>
          <Heading pad="none" margin="none" level="4">Birthday</Heading>
          <Paragraph>
            { DateTime.fromISO(user?.birthDate).toLocaleString() }
          </Paragraph>
        </Box>
        <Box>
          <Heading pad="none" margin="none" level="4">{ user?.specialDateDescription ? user.specialDateDescription : 'Special Day'}</Heading>
          <Paragraph>{ DateTime.fromISO(user?.specialDate).toLocaleString() }</Paragraph>
        </Box>
        <Box margin={{bottom: "medium"}}>
          <Button default alignSelf="end" icon={<Edit/>} label="Edit" onClick={onEdit}></Button>
        </Box>
      </CardBody>
      <CardFooter pad="medium">
        <span>SBTP.XYZ loves to surprise customers with gifts on their special days.</span>
      </CardFooter>
    </div>
  )
}

SpecialDatesDisplay.propTypes = {
  user: PropTypes.object.isRequired,
  onEdit: PropTypes.func.isRequired,
}

export default SpecialDatesDisplay
