import React, { useState } from "react"
import { Heading, Paragraph, Box, Grid, Image, TextInput } from "grommet"
import { Search } from 'grommet-icons'
import Link from '../components/Link'
import { useGetProducts } from '../operations/queries/getProducts'
import { useSiteMetadata } from '../hooks/useSiteMetadata'

import Layout from "../components/layout"
import SEO from "../components/seo"


const ProductsPage = () => {
  const siteMetadata = useSiteMetadata();
  const { error, loading, data } = useGetProducts();
  const [ searchValue, setSearchValue ] = useState('');
  if (error) return <Paragraph>{error}</Paragraph>
  if (loading) return <Paragraph>Loading...</Paragraph>
  return (
    <Layout>
      <SEO title="Products" />
      <Heading level="2">Products</Heading>
      <Box margin={{bottom: "medium"}}>
        <TextInput
          icon=<Search/>
          placeholder="PM HMK 02-113"
          value={searchValue}
          onChange={evt => setSearchValue(evt.target.value)}
        />
      </Box>
      <Grid
        rows={['small', 'xsmall']}
        columns={['small', 'small']}
        gap="small"
        areas={[
          { name: 'featured', start: [0, 0], end: [1, 0] },
          { name: 'main', start: [0, 1], end: [2, 0] }
        ]}
      >
        {data.products.map((product) => (
          <Box
            key={product.id}
          >
            <Link to={`/product/${product.id}`}>
              <Image key={product.media[0].url} src={`${siteMetadata.apiURL}${product.media[0].url}`}/>
              <Heading margin="none" level="4">{product.title}</Heading>
            </Link>
          </Box>
        ))}

      </Grid>


    </Layout>
  )
}


export default ProductsPage
