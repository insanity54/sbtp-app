import React from "react"
import ProfileIdentity from './ProfileIdentity'
import ProfileMailingAddress from './ProfileMailingAddress'
import ProfileSpecialDates from './ProfileSpecialDates'

const ProfileOverview = ({ user }) => {
  return (
    <div>
      <ProfileIdentity user={user}></ProfileIdentity>
      <ProfileMailingAddress user={user}></ProfileMailingAddress>
      <ProfileSpecialDates user={user}></ProfileSpecialDates>
    </div>
  )
}

export default ProfileOverview
