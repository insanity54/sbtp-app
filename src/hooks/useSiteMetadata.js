import { useStaticQuery, graphql } from "gatsby"

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            branding
            description
            author
            apiURL
          }
        }
      }
    `
  )
  return site.siteMetadata
}
