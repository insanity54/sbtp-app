import React from "react"
import Identity from './Identity'
import AddressWrapper from './AddressWrapper'
import SpecialDatesWrapper from './SpecialDatesWrapper'

const ProfileOverview = ({ user }) => {
  return (
    <div>
      <Identity user={user}></Identity>
      <SpecialDatesWrapper user={user}></SpecialDatesWrapper>
      <AddressWrapper user={user}></AddressWrapper>
    </div>
  )
}

export default ProfileOverview
