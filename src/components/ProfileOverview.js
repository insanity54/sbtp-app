import React from "react"
import ProfileIdentity from './ProfileIdentity'
import AddressWrapper from './AddressWrapper'
import ProfileSpecialDates from './ProfileSpecialDates'

const ProfileOverview = ({ user }) => {
  return (
    <div>
      <ProfileIdentity user={user}></ProfileIdentity>
      <AddressWrapper user={user}></AddressWrapper>
      <ProfileSpecialDates user={user}></ProfileSpecialDates>
    </div>
  )
}

export default ProfileOverview
