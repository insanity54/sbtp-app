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

const SpecialDatesDisplay = ({ user, onEdit }) => {


  return (
    <div>
      <CardBody pad={{horizontal: "medium"}}>
        <Box>
          <Heading level="4">Birthday</Heading>
          <Paragraph>
            { user?.birthDate }
          </Paragraph>
        </Box>
        <Box>
          <Heading level="4">{ user?.specialDateDescription ? user.specialDateDescription : 'Special Day'}</Heading>
          <Paragraph>{ user?.specialDate }</Paragraph>
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
