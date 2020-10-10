import React from "react"
import { Grid } from "grommet"
import { UserSettings, Achievement, Gift, ContactInfo, Package } from 'grommet-icons'
import MenuItem from './MenuItem'

const MainMenu = () => (
  <Grid columns="small" gap="medium" fill="horizontal">
    <MenuItem label="Products" to="/products" icon={<Package/>} />
    <MenuItem label="Prize Pool" to="/prizes" icon={<Gift/>} />
    <MenuItem label="Rewards" to="/user/rewards" icon={<Achievement/>} />
    <MenuItem label="Profile" to="/user/profile" icon={<ContactInfo/>} />
    <MenuItem label="Settings" to="/user/settings" icon={<UserSettings/>} />

  </Grid>
)

export default MainMenu
