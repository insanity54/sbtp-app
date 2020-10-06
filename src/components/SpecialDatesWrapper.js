import React from "react"
import { Schedules } from 'grommet-icons'
import {
  Heading,
  Box,
  Card,
  CardHeader,
} from 'grommet'
import PropTypes from 'prop-types'
import SpecialDatesEditor from './SpecialDatesEditor'
import SpecialDatesDisplay from './SpecialDatesDisplay'
import { specialDateEditMode } from '../apollo/cache'

const SpecialDatesWrapper = ({ user }) => {

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
        {specialDateEditMode() === 'display' && <SpecialDatesDisplay user={user} onEdit={() => { specialDateEditMode('edit') }}/>}
        {specialDateEditMode() === 'edit' && <SpecialDatesEditor user={user} onCancel={() => { specialDateEditMode('display') } } onSave={() => { specialDateEditMode('display') }} />}
      </Card>
    </Box>
  )
}

SpecialDatesWrapper.propTypes = {
  user: PropTypes.object
}

export default SpecialDatesWrapper
