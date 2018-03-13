import React from 'react'
import Link from 'gatsby-link'
import {Box, Header, Button} from '../components'
import s from './home.module.scss'

class IndexPage extends React.Component {
  render() {
    return (
      <Box>
        <Header />
        <div className={s.content}>
          <p> We like to keep things simple. </p>
          <p> If you have a product or a startup, we specialise in making you more successful. That's it. </p>
          <p> For brand new founders, we help with technical roadmapping. If you've already launched something, maybe you'd like support on monitoring and analysing the results. Or if you have a product that's struggling, we can help identify problems with your team and processes. </p>
          <p> We'll save you time and money, and help your products reach the vision that you've set for them.</p>
        </div>
        <Button to="mailto:alex@climbandbloom.com">Contact us</Button>
      </Box>
    )
  }
}

export default IndexPage
