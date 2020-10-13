import React from "react"
import MainMenu from '../components/MainMenu'
import { Box, Heading, Paragraph, Card } from 'grommet'
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Box>
      <Heading margin={{bottom: "5px"}}>Sakura Blossom Trading Post</Heading>
      <Paragraph size="large">Dealer of <a target="_blank" href="http://p-memories.com/">Precious Memories</a> anime trading cards.<br/><b>On a misson to bring #Prememo to the USA.</b></Paragraph>
      <Paragraph><i>✨ Customer Rewards Site Coming Q1 2021 ✨</i></Paragraph>
      <Paragraph>🛒 Browse our entire card inventory on <a target="_blank" href="https://www.ebay.com/str/SakuraBlossomTradingPost">eBay</a></Paragraph>
      <Paragraph>📜 Learn more about Precious Memories TCG on the <a target="_blank" href="https://wiki.sbtp.xyz">SBTP Wiki</a></Paragraph>
      <Paragraph>🐦 See our daily tweets featuring Precious Memories cards on <a target="_blank" href="https://twitter.com/ebay_sbtp">Twitter</a> and <a target="_blank" href="https://wxw.moe/@ebay_sbtp">Mastodon</a></Paragraph>
      <Paragraph>💬 For all inquiries, e-mail <a target="_blank" href="mailto:chris@sbtp.xyz">chris@sbtp.xyz</a> or DM <br/><strong>CJ Crispy#6052</strong> on Discord</Paragraph>
    </Box>
  </Layout>
)

export default IndexPage
