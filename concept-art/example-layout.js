import React, { Children } from 'react'
import { Grommet, Box, Text, Button, Anchor, Header, Nav, TextInput, Heading, Footer, Paragraph, FormField, Form, TextArea, CheckBox, RadioButtonGroup, Grid, Select, Tabs, Tab, Menu, Accordion, AccordionPanel, MaskedInput, CheckBoxGroup } from 'grommet'
import { FormNext, Hpe, FormAdd, Search, Notification, Chat, User, Clock, Apps, Terminal, ShieldSecurity, Configure, StatusUnknown, FormPrevious, FormSchedule, FormEdit, FormFolder } from 'grommet-icons'
import { hpe as theme } from 'grommet-theme-hpe'

const RouterContext = React.createContext({})

const Router = ({ children }) => {
  const [path, setPath] = React.useState("/home")

  React.useEffect(() => {
    const onPopState = () => setPath(document.location.pathname)
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  const push = nextPath => {
    if (nextPath !== path) {
      window.history.pushState(undefined, undefined, nextPath)
      setPath(nextPath)
      window.scrollTo(0, 0)
    }
  }

  return (
    <RouterContext.Provider value={{ path, push }}>
      {children}
    </RouterContext.Provider>
  )
}

const Routes = ({ children }) => {
  const { path: contextPath } = React.useContext(RouterContext)
  let found
  Children.forEach(children, child => {
    if (!found && contextPath === child.props.path) found = child
  })
  return found
}

const Route = ({ Component, path }) => {
  const { path: contextPath } = React.useContext(RouterContext)
  return contextPath === path ? <Component /> : null
}


const Button = () => {
    const { push } = React.useContext(RouterContext)
  
  return (
    <Box align="center" justify="center">

      <Box align="center" direction="row" background={{"color":"background-back"}} justify="center" fill>
        <Box align="start" justify="start" gap="small" background={{"color":"background-front"}} pad="medium" width="medium">
          <Text weight="bold">
            Default Button
          </Text>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Button label="Button" />
            <Text>
              button / light / default
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Button label="Button" active />
            <Text>
              button / light / active
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Button label="Button" disabled />
            <Text>
              button / light / disabled
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Button label="Button" icon={<FormNext />} reverse />
            <Text>
              default-icon / light / default
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Button label="Button" icon={<FormNext />} reverse active />
            <Text>
              default-icon / light / active
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Button label="Button" icon={<FormNext />} reverse disabled />
            <Text>
              default-icon / light / disabled
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Button icon={<FormNext />} reverse disabled={false} plain={false} />
            <Text>
              default-icononly / light / default
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Button icon={<FormNext />} reverse disabled={false} active plain={false} />
            <Text>
              default-icononly / light / active
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Button icon={<FormNext />} reverse disabled plain={false} />
            <Text>
              default-icononly / light / disabled
            </Text>
          </Box>
          <Text weight="bold">
            Secondary Button
          </Text>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Button label="Button" secondary />
            <Text>
              secondary / light / default
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Button label="Button" active secondary />
            <Text>
              secondary / light / active
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Button label="Button" disabled secondary />
            <Text>
              secondary / light / disabled
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Button label="Button" icon={<FormNext />} reverse secondary />
            <Text>
              secondary-icon / light / default
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Button label="Button" icon={<FormNext />} reverse active secondary />
            <Text>
              secondary-icon / light / active
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Button label="Button" icon={<FormNext />} reverse disabled secondary />
            <Text>
              secondary-icon / light / disabled
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Button icon={<FormNext />} reverse disabled={false} plain={false} secondary />
            <Text>
              secondary-icononly / light / default
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Button icon={<FormNext />} reverse disabled={false} active plain={false} secondary />
            <Text>
              secondary-icononly / light / active
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Button icon={<FormNext />} reverse disabled plain={false} secondary />
            <Text>
              secondary-icononly / light / disabled
            </Text>
          </Box>
          <Text weight="bold">
            Primary Button
          </Text>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Button label="Button" primary />
            <Text>
              primary / light / default
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Button label="Button" active primary />
            <Text>
              primary / light / active
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Button label="Button" disabled primary />
            <Text>
              primary / light / disabled
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Button label="Button" icon={<FormNext />} reverse primary />
            <Text>
              primary-icon / light / default
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Button label="Button" icon={<FormNext />} reverse active primary />
            <Text>
              primary-icon / light / active
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Button label="Button" icon={<FormNext />} reverse disabled primary />
            <Text>
              primary-icon / light / disabled
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Button icon={<FormNext />} reverse disabled={false} primary />
            <Text>
              primary-icononly / light / default
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Button icon={<FormNext />} reverse disabled={false} active primary />
            <Text>
              primary-icononly / light / active
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Button icon={<FormNext />} reverse disabled primary />
            <Text>
              primary-icononly / light / disabled
            </Text>
          </Box>
        </Box>
        <Box align="start" justify="start" gap="small" background={{"color":"background","dark":true}} pad="medium" width="medium">
          <Text weight="bold">
            Default Button
          </Text>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Button label="Button" />
            <Text>
              button / dark / default
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Button label="Button" active />
            <Text>
              button / dark / active
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Button label="Button" disabled />
            <Text>
              button / dark / disabled
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Button label="Button" icon={<FormNext />} reverse />
            <Text>
              default-icon / dark / default
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Button label="Button" icon={<FormNext />} reverse active />
            <Text>
              default-icon / dark / active
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Button label="Button" icon={<FormNext />} reverse disabled />
            <Text>
              default-icon / dark / disabled
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Button icon={<FormNext />} reverse disabled={false} plain={false} />
            <Text>
              default-icononly / dark / default
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Button icon={<FormNext />} reverse disabled={false} active plain={false} />
            <Text>
              default-icononly / dark / active
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Button icon={<FormNext />} reverse disabled plain={false} />
            <Text>
              default-icononly / dark / disabled
            </Text>
          </Box>
          <Text weight="bold">
            Secondary Button
          </Text>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Button label="Button" secondary />
            <Text>
              secondary / dark / default
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Button label="Button" active secondary />
            <Text>
              secondary / dark / active
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Button label="Button" disabled secondary />
            <Text>
              secondary / dark / disabled
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Button label="Button" icon={<FormNext />} reverse secondary />
            <Text>
              secondary-icon / dark / default
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Button label="Button" icon={<FormNext />} reverse active secondary />
            <Text>
              secondary-icon / dark / active
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Button label="Button" icon={<FormNext />} reverse disabled secondary />
            <Text>
              secondary-icon / dark / disabled
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Button icon={<FormNext />} reverse disabled={false} plain={false} secondary />
            <Text>
              secondary-icononly / dark / default
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Button icon={<FormNext />} reverse disabled={false} active plain={false} secondary />
            <Text>
              secondary-icononly / dark / active
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Button icon={<FormNext />} reverse disabled plain={false} secondary />
            <Text>
              secondary-icononly / dark / disabled
            </Text>
          </Box>
          <Text weight="bold">
            Primary Button
          </Text>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Button label="Button" primary />
            <Text>
              primary / dark / default
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Button label="Button" active primary />
            <Text>
              primary / dark / active
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Button label="Button" disabled primary />
            <Text>
              primary / dark / disabled
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Button label="Button" icon={<FormNext />} reverse primary />
            <Text>
              primary-icon / dark / default
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Button label="Button" icon={<FormNext />} reverse active primary />
            <Text>
              primary-icon / dark / active
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Button label="Button" icon={<FormNext />} reverse disabled primary />
            <Text>
              primary-icon / dark / disabled
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Button icon={<FormNext />} reverse disabled={false} primary />
            <Text>
              primary-icononly / dark / default
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Button icon={<FormNext />} reverse disabled={false} active primary />
            <Text>
              primary-icononly / dark / active
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Button icon={<FormNext />} reverse disabled primary />
            <Text>
              primary-icononly / dark / disabled
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

const Anchor = () => {
    const { push } = React.useContext(RouterContext)
  
  return (
    <Box align="center" justify="start" fill>

      <Box align="start" justify="center" fill direction="row" background={{"color":"background-back"}}>
        <Box align="center" justify="start" pad="medium" gap="medium" width="medium" background={{"color":"background-front"}} fill="vertical">
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Anchor label="Anchor" />
            <Text>
              anchor / light / default
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Anchor label="Anchor" disabled />
            <Text>
              anchor / light / disabled
            </Text>
          </Box>
        </Box>
        <Box align="center" justify="start" pad="medium" gap="medium" background={{"color":"background-back","dark":true}} width="medium" fill="vertical">
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Anchor label="Anchor" />
            <Text>
              anchor / dark / default
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Anchor label="Anchor" disabled />
            <Text>
              anchor / dark / disabled
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

const Header = () => {
    const { push } = React.useContext(RouterContext)
  
  return (
    <Box align="center" justify="center">

      <Box align="center" justify="center" fill="horizontal" background={{"dark":false}}>
        <Header align="center" direction="row" flex={false} justify="between" gap="medium" fill="horizontal" pad="medium">
          <Box align="center" justify="center" direction="row" gap="small">
            <Hpe color="brand" />
            <Box align="center" justify="center" direction="row" gap="xsmall">
              <Text weight="bold" color="text-strong">
                HPE
              </Text>
              <Text color="text-strong">
                App Name
              </Text>
            </Box>
          </Box>
          <Button label="Label" reverse icon={<FormAdd />} gap="small" />
        </Header>
        <Header align="center" direction="row" flex={false} justify="between" gap="medium" fill="horizontal" pad="medium">
          <Box align="center" justify="center" direction="row" gap="small">
            <Hpe color="brand" />
            <Box align="center" justify="center" direction="row" gap="xsmall">
              <Text weight="bold" color="text-strong">
                HPE
              </Text>
              <Text color="text-strong">
                App Name
              </Text>
            </Box>
          </Box>
          <Nav align="center" flex={false} direction="row">
            <Button label="Label" reverse={false} />
            <Button label="Label" reverse={false} />
            <Button label="Label" reverse={false} />
          </Nav>
        </Header>
        <Header align="center" direction="row" flex={false} justify="between" gap="medium" fill="horizontal" pad="medium">
          <Box align="center" justify="center" direction="row" gap="small">
            <Hpe color="brand" />
            <Box align="center" justify="center" direction="row" gap="xsmall">
              <Text weight="bold" color="text-strong">
                HPE
              </Text>
              <Text color="text-strong">
                App Name
              </Text>
            </Box>
          </Box>
          <Box align="center" justify="center" width="medium" background={{"color":"background-contrast"}}>
            <TextInput plain icon={<Search />} reverse placeholder="Search App Name" />
          </Box>
        </Header>
        <Header align="center" direction="row" flex={false} justify="between" gap="medium" fill="horizontal" pad="medium">
          <Box align="center" justify="center" direction="row" gap="small">
            <Hpe color="brand" />
            <Box align="center" justify="center" direction="row" gap="xsmall">
              <Text weight="bold" color="text-strong">
                HPE
              </Text>
              <Text color="text-strong">
                App Name
              </Text>
            </Box>
          </Box>
          <Box align="center" justify="center" background={{"color":"background-contrast"}} round="full" pad="small" width="xxsmall" height="xxsmall">
            <Text textAlign="center" color="text-strong">
              ES
            </Text>
          </Box>
        </Header>
        <Header align="center" direction="row" flex={false} justify="between" gap="medium" fill="horizontal" pad="medium">
          <Box align="center" justify="center" direction="row" gap="small">
            <Hpe color="brand" />
            <Box align="center" justify="center" direction="row" gap="xsmall">
              <Text weight="bold" color="text-strong">
                HPE
              </Text>
              <Text color="text-strong">
                App Name
              </Text>
            </Box>
          </Box>
          <Box align="center" justify="center" width="medium" background={{"color":"background-contrast"}}>
            <TextInput plain icon={<Search />} reverse placeholder="Search App Name" />
          </Box>
          <Box align="center" justify="center" direction="row">
            <Button icon={<Notification />} />
            <Button icon={<Chat />} />
            <Button icon={<User />} />
          </Box>
        </Header>
      </Box>
      <Box align="center" justify="center" fill="horizontal" background={{"dark":true,"color":"background-back"}}>
        <Header align="center" direction="row" flex={false} justify="between" gap="medium" fill="horizontal" pad="medium">
          <Box align="center" justify="center" direction="row" gap="small">
            <Hpe color="brand" />
            <Box align="center" justify="center" direction="row" gap="xsmall">
              <Text weight="bold" color="text-strong">
                HPE
              </Text>
              <Text color="text-strong">
                App Name
              </Text>
            </Box>
          </Box>
          <Button label="Label" reverse icon={<FormAdd />} gap="small" />
        </Header>
        <Header align="center" direction="row" flex={false} justify="between" gap="medium" fill="horizontal" pad="medium">
          <Box align="center" justify="center" direction="row" gap="small">
            <Hpe color="brand" />
            <Box align="center" justify="center" direction="row" gap="xsmall">
              <Text weight="bold" color="text-strong">
                HPE
              </Text>
              <Text color="text-strong">
                App Name
              </Text>
            </Box>
          </Box>
          <Nav align="center" flex={false} direction="row">
            <Button label="Label" reverse={false} />
            <Button label="Label" reverse={false} />
            <Button label="Label" reverse={false} />
          </Nav>
        </Header>
        <Header align="center" direction="row" flex={false} justify="between" gap="medium" fill="horizontal" pad="medium">
          <Box align="center" justify="center" direction="row" gap="small">
            <Hpe color="brand" />
            <Box align="center" justify="center" direction="row" gap="xsmall">
              <Text weight="bold" color="text-strong">
                HPE
              </Text>
              <Text color="text-strong">
                App Name
              </Text>
            </Box>
          </Box>
          <Box align="center" justify="center" width="medium" background={{"color":"background-contrast"}}>
            <TextInput plain icon={<Search />} reverse placeholder="Search App Name" />
          </Box>
        </Header>
        <Header align="center" direction="row" flex={false} justify="between" gap="medium" fill="horizontal" pad="medium">
          <Box align="center" justify="center" direction="row" gap="small">
            <Hpe color="brand" />
            <Box align="center" justify="center" direction="row" gap="xsmall">
              <Text weight="bold" color="text-strong">
                HPE
              </Text>
              <Text color="text-strong">
                App Name
              </Text>
            </Box>
          </Box>
          <Box align="center" justify="center" background={{"color":"background-contrast"}} round="full" pad="small" width="xxsmall" height="xxsmall">
            <Text textAlign="center" color="text-strong">
              ES
            </Text>
          </Box>
        </Header>
        <Header align="center" direction="row" flex={false} justify="between" gap="medium" fill="horizontal" pad="medium">
          <Box align="center" justify="center" direction="row" gap="small">
            <Hpe color="brand" />
            <Box align="center" justify="center" direction="row" gap="xsmall">
              <Text weight="bold" color="text-strong">
                HPE
              </Text>
              <Text color="text-strong">
                App Name
              </Text>
            </Box>
          </Box>
          <Box align="center" justify="center" width="medium" background={{"color":"background-contrast"}}>
            <TextInput plain icon={<Search />} reverse placeholder="Search App Name" />
          </Box>
          <Box align="center" justify="center" direction="row">
            <Button icon={<Notification />} />
            <Button icon={<Chat />} />
            <Button icon={<User />} />
          </Box>
        </Header>
      </Box>
    </Box>
  )
}

const Dashboard = () => {
    const { push } = React.useContext(RouterContext)
  
  return (
    <Box align="center" justify="center" fill>

      <Box align="start" justify="center" fill direction="row">

        <Box align="center" justify="start" flex fill="vertical">

          <Box align="center" justify="center" fill pad="medium">
            <Header align="center" direction="row" flex={false} justify="between" gap="medium" fill="horizontal">
              <Heading>
                Controls
              </Heading>
              <Button label="Manage" primary />
            </Header>
            <Box align="center" justify="center" flex="grow" fill="horizontal" />
          </Box>

        </Box>
      </Box>
    </Box>
  )
}

const Footer = () => {
    const { push } = React.useContext(RouterContext)
  
  return (
    <Box align="center" justify="center" fill>

      <Box align="start" justify="start" background={{"color":"background-back"}} gap="medium" fill>
        <Footer align="center" direction="row-responsive" flex={false} justify="between" gap="medium" fill="horizontal" pad="medium" background={{"color":"background-front"}}>
          <Text>
            © 2020 Hewlett Packard Enterprise Development LP
          </Text>
          <Box align="center" justify="start" direction="row" gap="small">
            <Button label="Terms" plain />
            <Button label="Privacy" plain />
            <Button label="Security" plain />
            <Button label="Feedback" plain />
          </Box>
        </Footer>
        <Footer align="center" direction="row-responsive" flex={false} justify="between" gap="medium" fill="horizontal" pad="medium" background={{"color":"background","dark":true}}>
          <Text>
            © 2020 Hewlett Packard Enterprise Development LP
          </Text>
          <Box align="center" justify="start" direction="row" gap="small">
            <Button label="Terms" plain />
            <Button label="Privacy" plain />
            <Button label="Security" plain />
            <Button label="Feedback" plain />
          </Box>
        </Footer>
        <Paragraph>
          Note: The footer component is automatically responsive. These mobile views are wrapped in a narrow box purely to demonstrate how Footer looks on mobile.
        </Paragraph>
        <Box align="center" justify="center" width="medium">
          <Footer align="start" direction="column" flex={false} justify="between" gap="medium" fill="horizontal" pad="medium" background={{"color":"background-front"}}>
            <Text>
              © 2020 Hewlett Packard Enterprise Development LP
            </Text>
            <Box align="start" justify="center" direction="row" gap="small">
              <Button label="Terms" plain />
              <Button label="Privacy" plain />
              <Button label="Security" plain />
              <Button label="Feedback" plain />
            </Box>
          </Footer>
        </Box>
        <Box align="center" justify="center" width="medium">
          <Footer align="start" direction="column" flex={false} justify="between" gap="medium" fill="horizontal" pad="medium" background={{"color":"background","dark":true}}>
            <Text>
              © 2020 Hewlett Packard Enterprise Development LP
            </Text>
            <Box align="start" justify="center" direction="row" gap="small">
              <Button label="Terms" plain />
              <Button label="Privacy" plain />
              <Button label="Security" plain />
              <Button label="Feedback" plain />
            </Box>
          </Footer>
        </Box>
      </Box>
    </Box>
  )
}

const Sidebar = () => {
    const { push } = React.useContext(RouterContext)
  
  return (
    <Box align="center" justify="center" fill>

      <Box overflow="auto" align="start" fill direction="row" gap="medium">
        <Box align="start" justify="center" fill="vertical" background={{"color":"blue!"}} pad="medium" gap="large">
          <Box align="center" justify="center" background={{"color":"blue"}} round="full" pad="small" width="xxsmall" height="xxsmall">
            <Text textAlign="center">
              TS
            </Text>
          </Box>
          <Box align="center" justify="start" flex direction="column" gap="small">
            <Button icon={<Clock />} />
            <Button icon={<Apps />} />
            <Button icon={<Terminal />} />
            <Button icon={<ShieldSecurity />} />
            <Button icon={<Configure />} />
          </Box>
          <Box align="center" justify="end" flex gap="small">
            <Button icon={<Chat />} />
            <Button icon={<StatusUnknown />} />
          </Box>
        </Box>
        <Box align="start" justify="center" fill="vertical" background={{"color":"blue!"}} pad={{"right":"xlarge","left":"medium","vertical":"medium"}} gap="large">
          <Box align="center" justify="center" direction="row" gap="small">
            <Box align="center" justify="center" background={{"color":"blue"}} round="full" pad="small" width="xxsmall" height="xxsmall">
              <Text textAlign="center">
                TS
              </Text>
            </Box>
            <Text>
              Taylor Seamans
            </Text>
          </Box>
          <Box align="start" justify="start" flex gap="medium" pad={{"vertical":"small"}}>
            <Button label="Glances" icon={<Clock />} plain margin={{"bottom":"small"}} />
            <Button label="Services" icon={<Apps />} plain margin={{"bottom":"small"}} />
            <Button label="Console" icon={<Terminal />} plain margin={{"bottom":"small"}} />
            <Button label="Security" icon={<ShieldSecurity />} plain margin={{"bottom":"small"}} />
            <Button label="Configure" icon={<Configure />} plain />
          </Box>
          <Box align="start" justify="end" flex gap="medium" pad={{"vertical":"small"}}>
            <Button label="Chat" icon={<Chat />} plain />
            <Button label="Support" icon={<StatusUnknown />} plain margin={{"top":"small"}} />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

const TextInput = () => {
    const { push } = React.useContext(RouterContext)
  
  return (
    <Box align="center" justify="center" fill>

      <Box fill overflow="auto" align="start" direction="row" justify="center" background={{"color":"background-back"}}>
        <Box align="start" justify="start" gap="small" pad="medium" fill="vertical" basis="1/2" background={{"color":"background-front"}}>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <FormField label="Label">
              <TextInput />
            </FormField>
            <Text>
              text input / light / default
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <FormField label="Label">
              <TextInput value="Value" />
            </FormField>
            <Text>
              text input / light / value
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Form>
              <FormField label="Label" required>
                <TextInput />
              </FormField>
              <Button label="Submit" type="submit" />
            </Form>
            <Text>
              text input / light / validation
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <FormField label="Label" help="Description of how to use this field.">
              <TextInput />
            </FormField>
            <Text>
              text input / light / description
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <FormField label="Label" disabled>
              <TextInput placeholder="Placholder text" disabled />
            </FormField>
            <Text>
              text input / light / disabled
            </Text>
          </Box>
        </Box>
        <Box align="start" justify="start" gap="small" pad="medium" fill="vertical" basis="1/2" background={{"color":"background","dark":true}}>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <FormField label="Label">
              <TextInput />
            </FormField>
            <Text>
              text input / dark / default
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <FormField label="Label">
              <TextInput value="Value" />
            </FormField>
            <Text>
              text input / dark / value
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Form>
              <FormField label="Label" required>
                <TextInput />
              </FormField>
              <Button label="Submit" type="submit" />
            </Form>
            <Text>
              text input / light / validation
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <FormField label="Label" help="Description of how to use this field.">
              <TextInput />
            </FormField>
            <Text>
              text input / dark / description
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <FormField label="Label" disabled>
              <TextInput placeholder="Placholder text" disabled />
            </FormField>
            <Text>
              text input / dark / disabled
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

const TextArea = () => {
    const { push } = React.useContext(RouterContext)
  
  return (
    <Box align="center" justify="center" fill>

      <Box fill overflow="auto" align="start" direction="row" justify="center" background={{"color":"background-back"}}>
        <Box align="start" justify="start" gap="small" pad="medium" fill="vertical" basis="1/2" background={{"color":"background-front"}}>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <FormField label="Label">
              <TextArea placeholder="Placeholder text" />
            </FormField>
            <Text>
              text area / light / default
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <FormField label="Label">
              <TextArea value="Here is some text that is inside a textarea." />
            </FormField>
            <Text>
              text area / light / value
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Form>
              <FormField label="Label" required>
                <TextArea />
              </FormField>
              <Button label="Submit" type="submit" />
            </Form>
            <Text>
              text area / light / validation
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <FormField label="Label" help="Description of how to use this field.">
              <TextArea />
            </FormField>
            <Text>
              text area / light / description
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <FormField label="Label" disabled>
              <TextArea placeholder="Placeholder text" disabled />
            </FormField>
            <Text>
              text area / light / disabled
            </Text>
          </Box>
        </Box>
        <Box align="start" justify="start" gap="small" pad="medium" fill="vertical" basis="1/2" background={{"color":"background","dark":true}}>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <FormField label="Label">
              <TextArea placeholder="Placeholder text" />
            </FormField>
            <Text>
              text area / dark / default
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <FormField label="Label">
              <TextArea value="Here is some text that is inside a textarea." />
            </FormField>
            <Text>
              text area / dark / value
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Form>
              <FormField label="Label" required>
                <TextArea />
              </FormField>
              <Button label="Submit" type="submit" />
            </Form>
            <Text>
              text area / dark / validation
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <FormField label="Label" help="Description of how to use this field.">
              <TextArea />
            </FormField>
            <Text>
              text area / dark / description
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <FormField label="Label" disabled>
              <TextArea placeholder="Placeholder text" disabled />
            </FormField>
            <Text>
              text area / dark / disabled
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

const CheckBox = () => {
    const { push } = React.useContext(RouterContext)
  
  return (
    <Box overflow="auto" align="start" direction="column" justify="center" background={{"color":"background-back"}}>
      <Header align="center" direction="row" flex={false} justify="between" gap="medium" fill="horizontal" pad="medium">
        <Button label="Back to home" icon={<FormPrevious />} gap="xsmall" primary={false} onClick={() => push("/home")} />
      </Header>
      <Box align="center" justify="center" direction="row" fill>
        <Box align="start" justify="start" gap="small" pad="medium" basis="1/2" background={{"color":"background-front"}}>
          <Box align="start" justify="center" fill="horizontal">
            <Text weight="bold">
              Default
            </Text>
            <Box align="center" justify="between" direction="row" fill="horizontal">
              <FormField label="Label">
                <CheckBox label="CheckBox" />
              </FormField>
              <Text>
                checkbox / light / default
              </Text>
            </Box>
            <Box align="center" justify="between" direction="row" fill="horizontal">
              <FormField label="Label">
                <CheckBox label="CheckBox" checked />
              </FormField>
              <Text>
                checkbox / light / checked
              </Text>
            </Box>
            <Box align="center" justify="between" direction="row" fill="horizontal">
              <Form>
                <FormField label="Label" required>
                  <CheckBox label="CheckBox" />
                </FormField>
                <Button label="Submit" type="submit" />
              </Form>
              <Text>
                checkbox / light / validation
              </Text>
            </Box>
            <Box align="center" justify="between" direction="row" fill="horizontal">
              <FormField label="Label" help="Description of how to use this field.">
                <CheckBox label="CheckBox" />
              </FormField>
              <Text>
                checkbox / light / description
              </Text>
            </Box>
            <Box align="center" justify="between" direction="row" fill="horizontal">
              <FormField label="Label" disabled>
                <CheckBox label="CheckBox" disabled />
              </FormField>
              <Text>
                checkbox / light / disabled
              </Text>
            </Box>
          </Box>
          <Box align="start" justify="center" fill="horizontal">
            <Text weight="bold">
              Toggle
            </Text>
            <Box align="center" justify="between" direction="row" fill="horizontal">
              <FormField label="Label">
                <CheckBox label="Toggle" toggle />
              </FormField>
              <Text>
                toggle / light / default
              </Text>
            </Box>
            <Box align="center" justify="between" direction="row" fill="horizontal">
              <FormField label="Label">
                <CheckBox label="Toggle" checked toggle />
              </FormField>
              <Text>
                toggle / light / checked
              </Text>
            </Box>
            <Box align="center" justify="between" direction="row" fill="horizontal">
              <Form>
                <FormField label="Label" required>
                  <CheckBox label="Toggle" toggle />
                </FormField>
                <Button label="Submit" type="submit" />
              </Form>
              <Text>
                toggle / light / validation
              </Text>
            </Box>
            <Box align="center" justify="between" direction="row" fill="horizontal">
              <FormField label="Label" help="Description of how to use this field.">
                <CheckBox label="Toggle" toggle />
              </FormField>
              <Text>
                toggle / light / description
              </Text>
            </Box>
            <Box align="center" justify="between" direction="row" fill="horizontal">
              <FormField label="Label" disabled>
                <CheckBox label="Toggle" disabled toggle />
              </FormField>
              <Text>
                toggle / light / disabled
              </Text>
            </Box>
          </Box>
        </Box>
        <Box align="start" justify="start" gap="small" pad="medium" basis="1/2" background={{"color":"background","dark":true}}>
          <Box align="start" justify="center" fill="horizontal">
            <Text weight="bold">
              Default
            </Text>
            <Box align="center" justify="between" direction="row" fill="horizontal">
              <FormField label="Label">
                <CheckBox label="CheckBox" />
              </FormField>
              <Text>
                checkbox / dark / default
              </Text>
            </Box>
            <Box align="center" justify="between" direction="row" fill="horizontal">
              <FormField label="Label">
                <CheckBox label="CheckBox" checked />
              </FormField>
              <Text>
                checkbox / dark / checked
              </Text>
            </Box>
            <Box align="center" justify="between" direction="row" fill="horizontal">
              <Form>
                <FormField label="Label" required>
                  <CheckBox label="CheckBox" />
                </FormField>
                <Button label="Submit" type="submit" />
              </Form>
              <Text>
                checkbox / dark / validation
              </Text>
            </Box>
            <Box align="center" justify="between" direction="row" fill="horizontal">
              <FormField label="Label" help="Description of how to use this field.">
                <CheckBox label="CheckBox" />
              </FormField>
              <Text>
                checkbox / dark / description
              </Text>
            </Box>
            <Box align="center" justify="between" direction="row" fill="horizontal">
              <FormField label="Label" disabled>
                <CheckBox label="CheckBox" disabled />
              </FormField>
              <Text>
                checkbox / dark / disabled
              </Text>
            </Box>
          </Box>
          <Box align="start" justify="center" fill="horizontal">
            <Text weight="bold">
              Toggle
            </Text>
            <Box align="center" justify="between" direction="row" fill="horizontal">
              <FormField label="Label">
                <CheckBox label="Toggle" toggle />
              </FormField>
              <Text>
                toggle / dark / default
              </Text>
            </Box>
            <Box align="center" justify="between" direction="row" fill="horizontal">
              <FormField label="Label">
                <CheckBox label="Toggle" checked toggle />
              </FormField>
              <Text>
                toggle / dark / checked
              </Text>
            </Box>
            <Box align="center" justify="between" direction="row" fill="horizontal">
              <Form>
                <FormField label="Label" required>
                  <CheckBox label="Toggle" toggle />
                </FormField>
                <Button label="Submit" type="submit" />
              </Form>
              <Text>
                toggle / dark / validation
              </Text>
            </Box>
            <Box align="center" justify="between" direction="row" fill="horizontal">
              <FormField label="Label" help="Description of how to use this field.">
                <CheckBox label="Toggle" toggle />
              </FormField>
              <Text>
                toggle / dark / description
              </Text>
            </Box>
            <Box align="center" justify="between" direction="row" fill="horizontal">
              <FormField label="Label" disabled>
                <CheckBox label="Toggle" disabled toggle />
              </FormField>
              <Text>
                toggle / dark / disabled
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

const RadioButtonGroup = () => {
    const { push } = React.useContext(RouterContext)
  
  return (
    <Box align="center" justify="center" fill>

      <Box overflow="auto" align="start" direction="row" justify="center" background={{"color":"background-back"}} fill>
        <Box align="start" justify="start" gap="small" pad="medium" fill="vertical" basis="1/2" background={{"color":"background-front"}}>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <FormField label="Label">
              <RadioButtonGroup options={["option 1","option 2"]} />
            </FormField>
            <Text>
              radio button group / light / default
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <FormField label="Label">
              <RadioButtonGroup options={["option 1","option 2"]} value="option 1" />
            </FormField>
            <Text>
              radio button group / light / checked
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Form>
              <FormField label="Label" required>
                <RadioButtonGroup options={["option 1","option 2"]} />
              </FormField>
              <Button label="Validate" type="submit" secondary />
            </Form>
            <Text>
              radio button group / light / validation
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <FormField label="Label" help="Description of how to use this field.">
              <RadioButtonGroup options={["option 1","option 2"]} />
            </FormField>
            <Text>
              radio button group / light / description
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <FormField label="Label" required={false} disabled>
              <RadioButtonGroup options={["option 1","option 2"]} disabled />
            </FormField>
            <Text>
              radio button group / light / disabled
            </Text>
          </Box>
        </Box>
        <Box align="start" justify="start" gap="small" pad="medium" fill="vertical" basis="1/2" background={{"color":"background","dark":true}}>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <FormField label="Label">
              <RadioButtonGroup options={["option 1","option 2"]} />
            </FormField>
            <Text>
              radio button group / light / default
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <FormField label="Label">
              <RadioButtonGroup options={["option 1","option 2"]} value="option 1" />
            </FormField>
            <Text>
              radio button group / light / checked
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Form>
              <FormField label="Label" required>
                <RadioButtonGroup options={["option 1","option 2"]} />
              </FormField>
              <Button label="Validate" type="submit" secondary />
            </Form>
            <Text>
              radio button group / light / validation
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <FormField label="Label" help="Description of how to use this field.">
              <RadioButtonGroup options={["option 1","option 2"]} />
            </FormField>
            <Text>
              radio button group / light / description
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <FormField label="Label" required={false} disabled>
              <RadioButtonGroup options={["option 1","option 2"]} disabled />
            </FormField>
            <Text>
              radio button group / light / disabled
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

const Home = () => {
    const { push } = React.useContext(RouterContext)
  
  return (
    <Box align="center" justify="start" background={{"color":"background-back"}} pad="medium">
      <Box align="start" justify="center" width="xlarge" gap="medium">
        <Box align="start" justify="center" direction="column" width="large">
          <Heading margin="none">
            HPE Design System
          </Heading>
          <Paragraph fill>
            Welcome to the HPE Design System Designer! These examples are built with Grommet components, themed with grommet-theme-hpe. You can use these examples as visual/interactive guidance on what props to apply to various components, or use the code as a starting place for your application. Click on the tiles to navigate to individual components or templates.
          </Paragraph>
          <Box align="center" justify="center" direction="row" gap="xsmall" margin={{"vertical":"xsmall"}}>
            <Text>
              For more development guidance, check out the 
            </Text>
            <Anchor label="HPE Design System Developer Guidance" href="https://design-system.hpe.design/extend/developer-guidance" />
          </Box>
          <Box align="center" justify="center" direction="row" gap="xsmall" margin={{"vertical":"xsmall"}}>
            <Text>
              Looking for design files and resources? check out 
            </Text>
            <Anchor label="HPE Design System Designer Guidance" href="https://design-system.hpe.design/extend/designer-guidance" />
          </Box>
          <Box align="center" justify="center" direction="row" gap="xsmall" margin={{"vertical":"xsmall"}}>
            <Text>
              For full documentation, explore 
            </Text>
            <Anchor label="HPE Design System Documentation site" href="https://design-system.hpe.design/" />
          </Box>
        </Box>
        <Box align="start" justify="start" fill="horizontal" direction="column" gap="small">
          <Heading level="2" size="small" margin="none">
            Controls
          </Heading>
          <Grid columns="small" gap="medium" fill="horizontal">
            <Box align="center" justify="center" background={{"color":"background-front"}} pad="large" round="xsmall" onClick={{"screen":11,"label":"Anchor","key":11}} hoverIndicator>
              <Text>
                Anchor
              </Text>
            </Box>
            <Box align="center" justify="center" background={{"color":"background-front"}} pad="large" round="xsmall" onClick={{"screen":1,"label":"Button","key":1}} hoverIndicator>
              <Text>
                Button
              </Text>
            </Box>
            <Box align="center" justify="center" background={{"color":"background-front"}} pad="large" round="xsmall" onClick={{"screen":963,"label":"Tabs","key":963}} hoverIndicator>
              <Text>
                Tabs
              </Text>
            </Box>
            <Box align="center" justify="center" background={{"color":"background-front"}} pad="large" round="xsmall" onClick={[{"screen":1415,"label":"Accordion","key":1415}]} hoverIndicator>
              <Text>
                Accordion
              </Text>
            </Box>
          </Grid>
        </Box>
        <Box align="start" justify="center" fill="horizontal" gap="small">
          <Heading level="2" size="small" margin="none">
            Inputs
          </Heading>
          <Grid columns="small" gap="medium" fill="horizontal">
            <Box align="center" justify="center" background={{"color":"background-front"}} pad="large" round="xsmall" onClick={{"screen":498,"label":"CheckBox","key":498}} hoverIndicator>
              <Text>
                Checkbox
              </Text>
            </Box>
            <Box align="center" justify="center" background={{"color":"background-front"}} pad="large" round="xsmall" onClick={[{"screen":1780,"label":"CheckBoxGroup","key":1780}]} hoverIndicator>
              <Text>
                CheckBoxGroup
              </Text>
            </Box>
            <Box align="center" justify="center" background={{"color":"background-front"}} pad="large" round="xsmall" onClick={[{"screen":1558,"label":"MaskedInput","key":1558}]} hoverIndicator>
              <Text>
                MaskedInput
              </Text>
            </Box>
            <Box align="center" justify="center" background={{"color":"background-front"}} pad="large" round="xsmall" onClick={{"screen":574,"label":"RadioButtonGroup","key":574}} hoverIndicator>
              <Text>
                RadioButtonGroup
              </Text>
            </Box>
            <Box align="center" justify="center" background={{"color":"background-front"}} pad="large" round="xsmall" onClick={{"screen":796,"label":"Search","key":796}} hoverIndicator>
              <Text>
                Search
              </Text>
            </Box>
            <Box align="center" justify="center" background={{"color":"background-front"}} pad="large" round="xsmall" onClick={{"screen":422,"label":"TextArea","key":422}} hoverIndicator>
              <Text>
                TextArea
              </Text>
            </Box>
            <Box align="center" justify="center" background={{"color":"background-front"}} pad="large" round="xsmall" onClick={{"screen":344,"label":"TextInput","key":344}} hoverIndicator>
              <Text>
                TextInput
              </Text>
            </Box>
          </Grid>
        </Box>
        <Box align="start" justify="center" fill="horizontal" gap="small">
          <Heading level="2" size="small" margin="none">
            Layout Helpers
          </Heading>
          <Grid columns="small" gap="medium" fill="horizontal">
            <Box align="center" justify="center" background={{"color":"background-front"}} pad="large" round="xsmall" onClick={{"screen":75,"label":"Footer","key":75}} hoverIndicator>
              <Text>
                Footer
              </Text>
            </Box>
            <Box align="center" justify="center" background={{"color":"background-front"}} pad="large" round="xsmall" onClick={{"screen":21,"label":"Header","key":21}} hoverIndicator>
              <Text>
                Header
              </Text>
            </Box>
            <Box align="center" justify="center" background={{"color":"background-front"}} pad="large" round="xsmall" onClick={{"screen":120,"label":"Sidebar","key":120}} hoverIndicator>
              <Text>
                Sidebar
              </Text>
            </Box>
          </Grid>
        </Box>
        <Box align="start" justify="center" fill="horizontal" gap="small">
          <Heading level="2" size="small" margin="none">
            Templates
          </Heading>
          <Grid columns="small" gap="medium" fill="horizontal">
            <Box align="center" justify="center" background={{"color":"background-front"}} pad="large" round="xsmall" onClick={{"screen":44,"label":"Dashboard","key":44}} hoverIndicator>
              <Text>
                Dashboard
              </Text>
            </Box>
          </Grid>
        </Box>
      </Box>
    </Box>
  )
}

const Search = () => {
    const { push } = React.useContext(RouterContext)
  
  return (
    <Box align="center" justify="center" fill>

      <Box fill overflow="auto" align="start" direction="row" justify="center" background={{"color":"background-back"}}>
        <Box align="start" justify="start" gap="medium" pad="medium" fill="vertical" basis="1/2" background={{"color":"background-front"}}>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Box align="center" justify="center" width="medium">
              <TextInput icon={<Search />} placeholder="Search placeholder" reverse={false} />
            </Box>
            <Text>
              search / light / default
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Box align="center" justify="center" width="medium">
              <TextInput value="Text entered" icon={<Search />} reverse={false} />
            </Box>
            <Text>
              search / light / value
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Box align="center" justify="center" width="medium" background={{"color":"background-contrast"}} round="xsmall">
              <TextInput icon={<Search />} placeholder="Search placeholder" reverse={false} plain />
            </Box>
            <Text>
              search / light / simple
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Box align="center" justify="center" width="medium">
              <TextInput icon={<Search />} placeholder="Search placeholder" reverse />
            </Box>
            <Text>
              search-right / light / default
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Box align="center" justify="center" width="medium">
              <TextInput value="Text entered" icon={<Search />} reverse />
            </Box>
            <Text>
              search-right / light / value
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Box align="center" justify="center" width="medium" background={{"color":"background-contrast"}} round="xsmall">
              <TextInput icon={<Search />} placeholder="Search placeholder" reverse plain />
            </Box>
            <Text>
              search-right / light / simple
            </Text>
          </Box>
        </Box>
        <Box align="start" justify="start" gap="medium" pad="medium" fill="vertical" basis="1/2" background={{"color":"background","dark":true}}>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Box align="center" justify="center" width="medium">
              <TextInput icon={<Search />} placeholder="Search placeholder" reverse={false} />
            </Box>
            <Text>
              search / dark / default
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Box align="center" justify="center" width="medium">
              <TextInput value="Text entered" icon={<Search />} reverse={false} />
            </Box>
            <Text>
              search / dark / value
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Box align="center" justify="center" width="medium" background={{"color":"background-contrast"}} round="xsmall">
              <TextInput icon={<Search />} placeholder="Search placeholder" reverse={false} plain />
            </Box>
            <Text>
              search / dark / simple
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Box align="center" justify="center" width="medium">
              <TextInput icon={<Search />} placeholder="Search placeholder" reverse />
            </Box>
            <Text>
              search-right / dark / default
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Box align="center" justify="center" width="medium">
              <TextInput value="Text entered" icon={<Search />} reverse />
            </Box>
            <Text>
              search-right / dark / value
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Box align="center" justify="center" width="medium" background={{"color":"background-contrast"}} round="xsmall">
              <TextInput icon={<Search />} placeholder="Search placeholder" reverse plain />
            </Box>
            <Text>
              search-right / dark / simple
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

const Select = () => {
    const { push } = React.useContext(RouterContext)
  
  return (
    <Box align="center" justify="center" fill>

      <Box fill overflow="auto" align="start" direction="row" justify="center" background={{"color":"background-back"}}>
        <Box align="start" justify="start" gap="small" pad="medium" fill="vertical" basis="1/2" background={{"color":"background-front"}}>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Select options={["Item One","Item Two","Item Three","Item Four"]} placeholder="Select item" />
            <Text textAlign="start">
              select / light / no label
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <FormField label="Label">
              <Select options={["Item One","Item Two","Item Three","Item Four"]} placeholder="Select item" />
            </FormField>
            <Text textAlign="start">
              select / light / enabled
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <FormField label="Label">
              <Select options={["Item One","Item Two","Item Three","Item Four"]} placeholder="Select item" value="Item Three" />
            </FormField>
            <Text>
              select / light / value
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Form>
              <FormField label="Label" required>
                <Select options={["Item One","Item Two","Item Three","Item Four"]} placeholder="Select item" />
              </FormField>
              <Button label="Trigger Validation" type="submit" />
            </Form>
            <Text>
              select / light / validation
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <FormField label="Label" help="Description of how to use this field.">
              <Select options={["Item One","Item Two","Item Three","Item Four"]} placeholder="Select item" />
            </FormField>
            <Text>
              select / light / description
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <FormField label="Label" disabled>
              <Select options={["Item One","Item Two","Item Three","Item Four"]} placeholder="Select item" disabled />
            </FormField>
            <Text>
              select / light / disabled
            </Text>
          </Box>
        </Box>
        <Box align="start" justify="start" gap="small" pad="medium" fill="vertical" basis="1/2" background={{"color":"background","dark":true}}>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Select options={["Item One","Item Two","Item Three","Item Four"]} placeholder="Select item" />
            <Text textAlign="start">
              select / dark / no label
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <FormField label="Label">
              <Select options={["Item One","Item Two","Item Three","Item Four"]} placeholder="Select item" />
            </FormField>
            <Text>
              select / dark / enabled
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <FormField label="Label">
              <Select options={["Item One","Item Two","Item Three","Item Four"]} placeholder="Select item" value="Item Three" />
            </FormField>
            <Text>
              select / dark / value
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Form>
              <FormField label="Label" required>
                <Select options={["Item One","Item Two","Item Three","Item Four"]} placeholder="Select item" />
              </FormField>
              <Button label="Trigger Validation" type="submit" />
            </Form>
            <Text>
              select / dark / validation
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <FormField label="Label" help="Description of how to use this field.">
              <Select options={["Item One","Item Two","Item Three","Item Four"]} placeholder="Select item" />
            </FormField>
            <Text>
              select / dark / description
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <FormField label="Label" disabled>
              <Select options={["Item One","Item Two","Item Three","Item Four"]} placeholder="Select item" disabled />
            </FormField>
            <Text>
              select / dark / disabled
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

const Tabs = () => {
    const { push } = React.useContext(RouterContext)
  
  return (
    <Box align="center" justify="center" fill>

      <Box fill overflow="auto" align="start" direction="row" justify="center" background={{"color":"background-back"}}>
        <Box align="start" justify="start" gap="medium" pad="medium" fill="vertical" basis="1/2" background={{"color":"background-front"}}>
          <Text weight="bold">
            Label Tabs
          </Text>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Tabs>
              <Tab title="Label" />
              <Tab title="Label" />
              <Tab title="Label" />
            </Tabs>
          </Box>
          <Text weight="bold">
            Label + Icon Tabs
          </Text>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Tabs>
              <Tab title="Label" icon={<FormSchedule />} />
              <Tab title="Label" icon={<FormEdit />} />
              <Tab title="Label" icon={<FormFolder />} />
            </Tabs>
          </Box>
          <Text weight="bold">
            Label Tab
          </Text>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Tabs activeIndex={1}>
              <Tab title="Label" />
            </Tabs>
            <Text>
              tab / light / enabled
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Tabs>
              <Tab title="Label" />
            </Tabs>
            <Text>
              tab / light / active
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Tabs activeIndex={1}>
              <Tab title="Label" disabled />
            </Tabs>
            <Text>
              tab / light / disabled
            </Text>
          </Box>
          <Text weight="bold">
            Label + Icon Tab
          </Text>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Tabs activeIndex={1}>
              <Tab title="Label" icon={<FormSchedule />} />
            </Tabs>
            <Text>
              tab / light / enabled
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Tabs>
              <Tab title="Label" icon={<FormSchedule />} />
            </Tabs>
            <Text>
              tab / light / active
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Tabs>
              <Tab title="Label" icon={<FormSchedule />} disabled />
            </Tabs>
            <Text>
              tab / light / disabled
            </Text>
          </Box>
        </Box>
        <Box align="start" justify="start" gap="medium" pad="medium" fill="vertical" basis="1/2" background={{"color":"background","dark":true}}>
          <Text weight="bold">
            Label Tabs
          </Text>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Tabs>
              <Tab title="Label" />
              <Tab title="Label" />
              <Tab title="Label" />
            </Tabs>
          </Box>
          <Text weight="bold">
            Label + Icon Tabs
          </Text>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Tabs>
              <Tab title="Label" icon={<FormSchedule />} />
              <Tab title="Label" icon={<FormEdit />} />
              <Tab title="Label" icon={<FormFolder />} />
            </Tabs>
          </Box>
          <Text weight="bold">
            Label Tab
          </Text>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Tabs activeIndex={1}>
              <Tab title="Label" />
            </Tabs>
            <Text>
              tab / dark / enabled
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Tabs>
              <Tab title="Label" />
            </Tabs>
            <Text>
              tab / dark / active
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Tabs activeIndex={1}>
              <Tab title="Label" disabled />
            </Tabs>
            <Text>
              tab / dark / disabled
            </Text>
          </Box>
          <Text weight="bold">
            Label + Icon Tab
          </Text>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Tabs activeIndex={1}>
              <Tab title="Label" icon={<FormSchedule />} />
            </Tabs>
            <Text>
              tab / dark / enabled
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Tabs>
              <Tab title="Label" icon={<FormSchedule />} />
            </Tabs>
            <Text>
              tab / dark / active
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Tabs>
              <Tab title="Label" icon={<FormSchedule />} disabled />
            </Tabs>
            <Text>
              tab / dark / disabled
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

const Menu = () => {
    const { push } = React.useContext(RouterContext)
  
  return (
    <Box align="center" justify="center" fill>

      <Box fill overflow="auto" align="start" direction="row" justify="center" background={{"color":"background-back"}}>
        <Box align="start" justify="start" gap="medium" pad="medium" fill="vertical" background={{"color":"background-front"}} basis="auto">
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Box align="start" justify="center" width="medium">
              <Menu label="Menu" items={[{"label":"Open"},{"label":"Close"},{"label":"Save"},{"label":"Quit"}]} />
            </Box>
            <Text>
              menu / light / default
            </Text>
          </Box>
        </Box>
        <Box align="start" justify="start" gap="medium" pad="medium" fill="vertical" background={{"color":"background-back","dark":true}} basis="auto">
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Box align="start" justify="center" width="medium">
              <Menu label="Menu" items={[{"label":"Open"},{"label":"Close"},{"label":"Save"},{"label":"Quit"}]} />
            </Box>
            <Text>
              menu / dark / default
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

const Backtohome = () => {
    const { push } = React.useContext(RouterContext)
  
  return (
    <Box fill="vertical" overflow="auto" align="center" flex="grow">
      <Header align="center" direction="row" flex={false} justify="between" gap="medium" fill="horizontal" pad="medium" background={{"color":"background-contrast"}}>
        <Button label="Back to home" icon={<FormPrevious />} gap="xsmall" primary={false} onClick={() => push("/home")} />
      </Header>
    </Box>
  )
}

const Accordion = () => {
    const { push } = React.useContext(RouterContext)
  
  return (
    <Box align="center" justify="center" fill>

      <Box fill overflow="auto" align="start" direction="row" justify="center" background={{"color":"background-back"}}>
        <Box align="start" justify="start" gap="medium" pad="medium" fill="vertical" basis="1/2" background={{"color":"background-front"}}>
          <Text weight="bold">
            Collapsed Accordion
          </Text>
          <Box align="center" justify="center">
            <Accordion>
              <AccordionPanel label="panel">
                <Box align="center" justify="center" />
              </AccordionPanel>
              <AccordionPanel label="panel" />
              <AccordionPanel label="panel" />
            </Accordion>
          </Box>
          <Box align="center" justify="center">
            <Accordion>
              <AccordionPanel label="List Item">
                <Box align="center" justify="center">
                  <Text>
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
                  </Text>
                </Box>
              </AccordionPanel>
              <AccordionPanel label="List Item">
                <Box align="center" justify="center">
                  <Text>
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
                  </Text>
                </Box>
              </AccordionPanel>
              <AccordionPanel label="List Item">
                <Box align="center" justify="center">
                  <Text>
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
                  </Text>
                </Box>
              </AccordionPanel>
            </Accordion>
          </Box>
        </Box>
        <Box align="start" justify="start" gap="medium" pad="medium" fill="vertical" basis="1/2" background={{"color":"background","dark":true}}>
          <Text weight="bold">
            Collapsed Accordion
          </Text>
          <Accordion>
            <AccordionPanel label="panel">
              <Box align="center" justify="center" />
            </AccordionPanel>
            <AccordionPanel label="panel" />
            <AccordionPanel label="panel" />
          </Accordion>
          <Text weight="bold">
            Expanded Accordion
          </Text>
          <Box align="center" justify="center">
            <Accordion>
              <AccordionPanel label="List Item">
                <Box align="center" justify="center">
                  <Text>
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
                  </Text>
                </Box>
              </AccordionPanel>
              <AccordionPanel label="List Item">
                <Box align="center" justify="center">
                  <Text>
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
                  </Text>
                </Box>
              </AccordionPanel>
              <AccordionPanel label="List Item">
                <Box align="center" justify="center">
                  <Text>
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
                  </Text>
                </Box>
              </AccordionPanel>
            </Accordion>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

const MaskedInput = () => {
    const { push } = React.useContext(RouterContext)
  
  return (
    <Box align="center" justify="center" fill>

      <Box fill overflow="auto" align="start" direction="row" justify="center" background={{"color":"background-back"}}>
        <Box align="start" justify="start" gap="small" pad="medium" fill="vertical" basis="1/2" background={{"color":"background-front"}}>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <FormField label="Phone">
              <MaskedInput mask={[{"fixed":"("},{"length":[1,3],"regexp":"^[0-9]{1,3}$","placeholder":"xxx"},{"fixed":")"},{"fixed":" "},{"regexp":"^[0-9]{1,3}$","length":[1,3],"placeholder":"xxx"},{"fixed":"-"},{"placeholder":"xxxx","regexp":"^[0-9]{1,4}$","length":[1,4]}]} />
            </FormField>
            <Text>
              masked input / light / phone number
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <FormField label="IP Address">
              <MaskedInput mask={[{"fixed":"","length":[1,3],"placeholder":"xxx","regexp":"^[0-1][0-9][0-9]$|^2[0-4][0-9]$|^25[0-5]$|^[0-9][0-9]$|^[0-9]$"},{"fixed":"."},{"length":[1,3],"placeholder":"xxx","regexp":"^[0-1][0-9][0-9]$|^2[0-4][0-9]$|^25[0-5]$|^[0-9][0-9]$|^[0-9]$"},{"length":[1,3],"placeholder":"","fixed":"."},{"length":[1,3],"placeholder":"xxx","regexp":"^[0-1][0-9][0-9]$|^2[0-4][0-9]$|^25[0-5]$|^[0-9][0-9]$|^[0-9]$"},{"fixed":"."},{"length":[1,3],"placeholder":"xxx","regexp":"^[0-1][0-9][0-9]$|^2[0-4][0-9]$|^25[0-5]$|^[0-9][0-9]$|^[0-9]$"}]} />
            </FormField>
            <Text>
              masked input / light / ipv4
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Box align="center" justify="center">
              <FormField label="IP Range">
                <MaskedInput mask={[{"fixed":"","length":[1,3],"placeholder":"xxx","regexp":"^[0-1][0-9][0-9]$|^2[0-4][0-9]$|^25[0-5]$|^[0-9][0-9]$|^[0-9]$"},{"fixed":"."},{"length":[1,3],"placeholder":"xxx","regexp":"^[0-1][0-9][0-9]$|^2[0-4][0-9]$|^25[0-5]$|^[0-9][0-9]$|^[0-9]$"},{"length":[1,3],"placeholder":"","fixed":"."},{"length":[1,3],"placeholder":"xxx","regexp":"^[0-1][0-9][0-9]$|^2[0-4][0-9]$|^25[0-5]$|^[0-9][0-9]$|^[0-9]$"},{"fixed":"."},{"length":[1,3],"placeholder":"xxx","regexp":"^[0-1][0-9][0-9]$|^2[0-4][0-9]$|^25[0-5]$|^[0-9][0-9]$|^[0-9]$"},{"fixed":"-"},{"length":[1,3],"placeholder":"xxx","regexp":"^[0-1][0-9][0-9]$|^2[0-4][0-9]$|^25[0-5]$|^[0-9][0-9]$|^[0-9]$"},{"fixed":"."},{"length":[1,3],"placeholder":"xxx","regexp":"^[0-1][0-9][0-9]$|^2[0-4][0-9]$|^25[0-5]$|^[0-9][0-9]$|^[0-9]$"},{"fixed":"."},{"length":[1,3],"placeholder":"xxx","regexp":"^[0-1][0-9][0-9]$|^2[0-4][0-9]$|^25[0-5]$|^[0-9][0-9]$|^[0-9]$"},{"fixed":"."},{"length":[1,3],"placeholder":"xxx","regexp":"^[0-1][0-9][0-9]$|^2[0-4][0-9]$|^25[0-5]$|^[0-9][0-9]$|^[0-9]$"}]} />
              </FormField>
            </Box>
            <Text>
              masked input / light / ipv4 range
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Box align="center" justify="center">
              <FormField label="Storage Size">
                <MaskedInput mask={[{"fixed":"","regexp":"^\\d{1,4}$","options":["1","2","4","8","16","32","64","128","256","512","1024"],"placeholder":"123","length":[1,4]},{"fixed":" "},{"length":[1,2],"options":["MB","GB","TB"],"placeholder":"GB","regexp":"^[mgt]b$|^[MGT]B$|^[mMgGtT]$"}]} />
              </FormField>
            </Box>
            <Text>
              masked input / light / storage size
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Box align="center" justify="center">
              <FormField label="Email">
                <MaskedInput mask={[{"regexp":"^[\\w\\-_.]+$","placeholder":"example"},{"fixed":"@"},{"regexp":"^[\\w]+$","placeholder":"my"},{"fixed":"."},{"regexp":"^[\\w]+$","placeholder":"com"}]} />
              </FormField>
            </Box>
            <Text>
              masked input / light / email
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <FormField label="Phone" disabled>
              <MaskedInput mask={[{"fixed":"("},{"length":[1,3],"regexp":"^[0-9]{1,3}$","placeholder":"xxx"},{"fixed":")"},{"fixed":" "},{"regexp":"^[0-9]{1,3}$","length":[1,3],"placeholder":"xxx"},{"fixed":"-"},{"placeholder":"xxxx","regexp":"^[0-9]{1,4}$","length":[1,4]}]} disabled />
            </FormField>
            <Text>
              masked input / light / disabled
            </Text>
          </Box>
        </Box>
        <Box align="start" justify="start" gap="small" pad="medium" fill="vertical" basis="1/2" background={{"color":"background","dark":true}}>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <FormField label="Phone">
              <MaskedInput mask={[{"fixed":"("},{"length":[1,3],"regexp":"^[0-9]{1,3}$","placeholder":"xxx"},{"fixed":")"},{"fixed":" "},{"regexp":"^[0-9]{1,3}$","length":[1,3],"placeholder":"xxx"},{"fixed":"-"},{"placeholder":"xxxx","regexp":"^[0-9]{1,4}$","length":[1,4]}]} />
            </FormField>
            <Text>
              masked input / light / phone number
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <FormField label="IP Address">
              <MaskedInput mask={[{"fixed":"","length":[1,3],"placeholder":"xxx","regexp":"^[0-1][0-9][0-9]$|^2[0-4][0-9]$|^25[0-5]$|^[0-9][0-9]$|^[0-9]$"},{"fixed":"."},{"length":[1,3],"placeholder":"xxx","regexp":"^[0-1][0-9][0-9]$|^2[0-4][0-9]$|^25[0-5]$|^[0-9][0-9]$|^[0-9]$"},{"length":[1,3],"placeholder":"","fixed":"."},{"length":[1,3],"placeholder":"xxx","regexp":"^[0-1][0-9][0-9]$|^2[0-4][0-9]$|^25[0-5]$|^[0-9][0-9]$|^[0-9]$"},{"fixed":"."},{"length":[1,3],"placeholder":"xxx","regexp":"^[0-1][0-9][0-9]$|^2[0-4][0-9]$|^25[0-5]$|^[0-9][0-9]$|^[0-9]$"}]} />
            </FormField>
            <Text>
              masked input / light / ipv4
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Box align="center" justify="center">
              <FormField label="IP Range">
                <MaskedInput mask={[{"fixed":"","length":[1,3],"placeholder":"xxx","regexp":"^[0-1][0-9][0-9]$|^2[0-4][0-9]$|^25[0-5]$|^[0-9][0-9]$|^[0-9]$"},{"fixed":"."},{"length":[1,3],"placeholder":"xxx","regexp":"^[0-1][0-9][0-9]$|^2[0-4][0-9]$|^25[0-5]$|^[0-9][0-9]$|^[0-9]$"},{"length":[1,3],"placeholder":"","fixed":"."},{"length":[1,3],"placeholder":"xxx","regexp":"^[0-1][0-9][0-9]$|^2[0-4][0-9]$|^25[0-5]$|^[0-9][0-9]$|^[0-9]$"},{"fixed":"."},{"length":[1,3],"placeholder":"xxx","regexp":"^[0-1][0-9][0-9]$|^2[0-4][0-9]$|^25[0-5]$|^[0-9][0-9]$|^[0-9]$"},{"fixed":"-"},{"length":[1,3],"placeholder":"xxx","regexp":"^[0-1][0-9][0-9]$|^2[0-4][0-9]$|^25[0-5]$|^[0-9][0-9]$|^[0-9]$"},{"fixed":"."},{"length":[1,3],"placeholder":"xxx","regexp":"^[0-1][0-9][0-9]$|^2[0-4][0-9]$|^25[0-5]$|^[0-9][0-9]$|^[0-9]$"},{"fixed":"."},{"length":[1,3],"placeholder":"xxx","regexp":"^[0-1][0-9][0-9]$|^2[0-4][0-9]$|^25[0-5]$|^[0-9][0-9]$|^[0-9]$"},{"fixed":"."},{"length":[1,3],"placeholder":"xxx","regexp":"^[0-1][0-9][0-9]$|^2[0-4][0-9]$|^25[0-5]$|^[0-9][0-9]$|^[0-9]$"}]} />
              </FormField>
            </Box>
            <Text>
              masked input / light / ipv4 range
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Box align="center" justify="center">
              <FormField label="Storage Size">
                <MaskedInput mask={[{"fixed":"","regexp":"^\\d{1,4}$","options":["1","2","4","8","16","32","64","128","256","512","1024"],"placeholder":"123","length":[1,4]},{"fixed":" "},{"length":[1,2],"options":["MB","GB","TB"],"placeholder":"GB","regexp":"^[mgt]b$|^[MGT]B$|^[mMgGtT]$"}]} />
              </FormField>
            </Box>
            <Text>
              masked input / light / storage size
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <Box align="center" justify="center">
              <FormField label="Email">
                <MaskedInput mask={[{"regexp":"^[\\w\\-_.]+$","placeholder":"example"},{"fixed":"@"},{"regexp":"^[\\w]+$","placeholder":"my"},{"fixed":"."},{"regexp":"^[\\w]+$","placeholder":"com"}]} />
              </FormField>
            </Box>
            <Text>
              masked input / light / email
            </Text>
          </Box>
          <Box align="center" justify="between" direction="row" fill="horizontal">
            <FormField label="Phone" disabled>
              <MaskedInput mask={[{"fixed":"("},{"length":[1,3],"regexp":"^[0-9]{1,3}$","placeholder":"xxx"},{"fixed":")"},{"fixed":" "},{"regexp":"^[0-9]{1,3}$","length":[1,3],"placeholder":"xxx"},{"fixed":"-"},{"placeholder":"xxxx","regexp":"^[0-9]{1,4}$","length":[1,4]}]} disabled />
            </FormField>
            <Text>
              masked input / light / disabled
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

const CheckBoxGroup = () => {
    const { push } = React.useContext(RouterContext)
  
  return (
    <Box overflow="auto" align="start" direction="column" justify="center" background={{"color":"background-back"}}>
      <Header align="center" direction="row" flex={false} justify="between" gap="medium" fill="horizontal" pad="medium">
        <Button label="Back to home" icon={<FormPrevious />} gap="xsmall" primary={false} onClick={() => push("/home")} />
      </Header>
      <Box align="center" justify="center" direction="row" fill>
        <Box align="start" justify="start" gap="small" pad="medium" basis="1/2" background={{"color":"background-front"}}>
          <Box align="start" justify="center" fill="horizontal">
            <Text weight="bold">
              Default
            </Text>
            <Box align="center" justify="between" direction="row" fill="horizontal">
              <FormField label="Label">
                <CheckBoxGroup options={["option 1","option 2"]} />
              </FormField>
              <Text>
                checkboxgroup / light / default
              </Text>
            </Box>
            <Box align="center" justify="between" direction="row" fill="horizontal">
              <FormField label="Label">
                <CheckBoxGroup options={["option 1","option 2"]} value="option 1" />
              </FormField>
              <Text>
                checkboxgroup / light / checked
              </Text>
            </Box>
            <Box align="center" justify="between" direction="row" fill="horizontal">
              <Form>
                <FormField label="Label" required>
                  <CheckBoxGroup options={["option 1","option 2"]} />
                </FormField>
                <Button label="Submit" type="submit" secondary />
              </Form>
              <Text>
                checkboxgroup / light / validation
              </Text>
            </Box>
            <Box align="center" justify="between" direction="row" fill="horizontal">
              <FormField label="Label" help="Description of how to use this field.">
                <CheckBoxGroup options={["option 1","option 2"]} />
              </FormField>
              <Text>
                checkboxgroup / light / description
              </Text>
            </Box>
            <Box align="center" justify="between" direction="row" fill="horizontal">
              <FormField label="Label" disabled>
                <CheckBoxGroup options={["option 1","option 2"]} disabled />
              </FormField>
              <Text>
                checkboxgroup / light / disabled
              </Text>
            </Box>
          </Box>
        </Box>
        <Box align="start" justify="start" gap="small" pad="medium" basis="1/2" background={{"color":"background","dark":true}}>
          <Box align="start" justify="center" fill="horizontal">
            <Text weight="bold">
              Default
            </Text>
            <Box align="center" justify="between" direction="row" fill="horizontal">
              <FormField label="Label">
                <CheckBoxGroup options={["option 1","option 2"]} />
              </FormField>
              <Text>
                checkboxgroup / dark / default
              </Text>
            </Box>
            <Box align="center" justify="between" direction="row" fill="horizontal">
              <FormField label="Label">
                <CheckBoxGroup options={["option 1","option 2"]} value="option 1" />
              </FormField>
              <Text>
                checkboxgroup / dark / checked
              </Text>
            </Box>
            <Box align="center" justify="between" direction="row" fill="horizontal">
              <Form>
                <FormField label="Label" required>
                  <CheckBoxGroup options={["option 1","option 2"]} />
                </FormField>
                <Button label="Submit" type="submit" secondary />
              </Form>
              <Text>
                checkboxgroup / dark / validation
              </Text>
            </Box>
            <Box align="center" justify="between" direction="row" fill="horizontal">
              <FormField label="Label" help="Description of how to use this field.">
                <CheckBoxGroup options={["option 1","option 2"]} />
              </FormField>
              <Text>
                checkboxgroup / dark / description
              </Text>
            </Box>
            <Box align="center" justify="between" direction="row" fill="horizontal">
              <FormField label="Label" disabled>
                <CheckBoxGroup options={["option 1","option 2"]} disabled />
              </FormField>
              <Text>
                checkboxgroup / light / disabled
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default () => (
  <Grommet full theme={theme}>
    <Router>
      <Routes>
        <Route path="/button" Component={Button} />
        <Route path="/anchor" Component={Anchor} />
        <Route path="/header" Component={Header} />
        <Route path="/dashboard" Component={Dashboard} />
        <Route path="/footer" Component={Footer} />
        <Route path="/sidebar" Component={Sidebar} />
        <Route path="/textinput" Component={TextInput} />
        <Route path="/textarea" Component={TextArea} />
        <Route path="/checkbox" Component={CheckBox} />
        <Route path="/radiobuttongroup" Component={RadioButtonGroup} />
        <Route path="/home" Component={Home} />
        <Route path="/search" Component={Search} />
        <Route path="/select" Component={Select} />
        <Route path="/tabs" Component={Tabs} />
        <Route path="/menu" Component={Menu} />
        <Route path="/back-to-home" Component={Backtohome} />
        <Route path="/accordion" Component={Accordion} />
        <Route path="/maskedinput" Component={MaskedInput} />
        <Route path="/checkboxgroup" Component={CheckBoxGroup} />
      </Routes>
    </Router>
  </Grommet>
)
