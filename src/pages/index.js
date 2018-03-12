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
          <p> Pommy ipsum posh nosh punter grub's up you mean it ain't me noggin' stiff upper lip, black cab had a barney with the inlaws Sherlock grub's up. Make a brew cobbles it's the bees knees football accordingly by 'eck love. </p>
          <p> Gutted a bit wonky copper Kate and Will, bossy britches on the beat plum pudding and we all like figgy pudding. Ask your mother if a comely wench copped a bollocking bit of a div they can sod off see a man about a dog big light narky ear hole. </p>
          <p> Hard cheese old boy doofer bottled it chav I bid you good day bent as a nine bob note darling, wind up had a barney with the inlaws doing my head in it's me peepers.  </p>
          <p> It's nicked doing my head in copper throw a paddy narky damn, sweets bull dog pie-eyed know your onions. </p>
        </div>
        <Button to="mailto:alex@climbandbloom.com">Contact us</Button>
      </Box>
    )
  }
}

export default IndexPage
