import React, { useState, useEffect } from "react"
import { Heading, Paragraph, Box, Grid, Image, TextInput } from "grommet"
import { Search } from 'grommet-icons'
import Link from '../components/Link'
import { useSearchProducts } from '../operations/queries/searchProducts'
import { useSiteMetadata } from '../hooks/useSiteMetadata'
import { useDebounce } from 'use-debounce';


import Layout from "../components/layout"
import SEO from "../components/seo"



const ProductsPage = () => {
  const siteMetadata = useSiteMetadata();
  const { loading, data, error } = useSearchProducts()
  const [ searchValue, setSearchValue ] = useState('')
  const [ debouncedSearchValue ] = useDebounce(searchValue, 1000)

  const search = (searchTerms) => {
    console.log(`doing the search using terms ${searchTerms}`)
  }

  useEffect(() => {
    if (debouncedSearchValue) {
      search(debouncedSearchValue)
    }
  }, [debouncedSearchValue])

  if (error) return <Paragraph>{error}</Paragraph>
  if (loading) return <Paragraph>Loading...</Paragraph>


  return (
    <Layout>
      <SEO title="Products" />
      <Box margin={{bottom: "medium"}}>
        <TextInput
          icon=<Search/>
          placeholder="PM HMK 02-113"
          value={searchValue}
          onChange={(evt) => setSearchValue(evt.target.value) }
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
        {(data && data.products) && data.products.map((product) => (
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
