import React, { useState, useEffect, useCallback } from "react"
import { Heading, Paragraph, Box, Grid, Image, TextInput } from "grommet"
import { Search } from 'grommet-icons'
import Link from '../components/Link'
import { useSearchProducts } from '../operations/queries/searchProducts'
import { useSiteMetadata } from '../hooks/useSiteMetadata'
import { useDebounce } from 'use-debounce';
import { NetworkStatus } from '@apollo/client'

import Layout from "../components/layout"
import SEO from "../components/seo"



const ProductsPage = () => {
  const siteMetadata = useSiteMetadata();
  const { loading, data, error, refetch, networkStatus } = useSearchProducts()
  const [ searchValue, setSearchValue ] = useState('')
  const [ debouncedSearchValue, { pending } ] = useDebounce(searchValue, 250)



  useEffect(() => {
    if (pending) {
      refetch({
          searchTerms: debouncedSearchValue
        }
      )
    }
  }, [debouncedSearchValue, pending, refetch])



  return (
    <Layout>
      <SEO title="Products" />
      <Box margin={{bottom: "medium"}}>
        <TextInput
          icon=<Search/>
          placeholder="PM HMK 02-113"
          value={searchValue}
          onChange={(evt) => {
            setSearchValue(evt.target.value)
          }}
        />
      </Box>
      {networkStatus === NetworkStatus.refetch && <Paragraph>Loading...</Paragraph>}
      {loading && <Paragraph>Loading...</Paragraph>}
      {error && <Paragraph>{error}</Paragraph>}
      <Grid
        rows={['small', 'xsmall']}
        columns={['small', 'small']}
        gap="small"
        areas={[
          { name: 'featured', start: [0, 0], end: [1, 0] },
          { name: 'main', start: [0, 1], end: [2, 0] }
        ]}
      >
        {(data && data.products.length === 0) && <Paragraph>There are no results matching your query</Paragraph>}
        {(data && data.products) && data.products.map((product) => (
          <Box
            key={product.id}
          >
            <Link to={`/product/${product.id}`}>
              <Image key={product.media[0].url} src={`${siteMetadata.apiURL}${product.media[0].url}`}/>
              <Heading margin="none" level="4">{product.identifier}</Heading>
            </Link>
          </Box>
        ))}

      </Grid>


    </Layout>
  )
}


export default ProductsPage
