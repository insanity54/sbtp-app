import React from "react"
import Identity from './Identity'
import AddressWrapper from './AddressWrapper'
import ProfileSpecialDates from './ProfileSpecialDates'

const ProfileOverview = ({ user }) => {
  return (
    <div>
      <Identity user={user}></Identity>
      <ProfileSpecialDates user={user}></ProfileSpecialDates>
      <AddressWrapper user={user}></AddressWrapper>
    </div>
  )
}

export default ProfileOverview
