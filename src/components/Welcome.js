import React, { useRef, useEffect } from "react"
import { Box } from 'grommet'
import { TweenMax, gsap } from 'gsap/all'
import { ReactComponent as WelcomeScene } from '../images/welcome-scene.svg'
import theme from "../theme/theme.json"
import { useDarkTheme } from '../hooks/useUser'



/**
 * The ENTICING content on the home page
 */
const Welcome = () => {
  const { data } = useDarkTheme()

  const ref = useRef(null)

  useEffect(() => {
    const spinner = ref.current.children[0]
    const message = ref.current.children[1]
    const fillColor = (!!data?.user.darkTheme) ? theme.global.colors['background-contrast'].dark : theme.global.colors['background-contrast'].light
    const textColor = (!!data?.user.darkTheme) ? theme.global.colors['text'].dark : theme.global.colors['text'].light

    gsap.set(spinner, { fill: fillColor, stroke: 'none' })
    gsap.set(message, { fill: textColor })

    const tl = gsap.timeline({ repeat: -1 })
    TweenMax.to(spinner, { duration: 8, rotation: "360", repeat: -1, transformOrigin: "50% 50%", ease: 'none' })
    tl
      .from(message, { duration: 1, scale: 1.2, ease: 'power1', transformOrigin: "50% 50%", yoyo: true, repeat: true})
  }, [data])

  return (
    <Box margin={{bottom: "medium"}} pad="medium" background="background-front">
        <WelcomeScene ref={ref} />
    </Box>
  )

}

export default Welcome
