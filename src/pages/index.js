import React from 'react'
import Link from 'gatsby-link'
import {Box, Header, Button} from '../components'
import s from './home.module.scss'

class IndexPage extends React.Component {
  render() {
    return (
      <Box>
        <div className={s.content}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in malesuada dolor. Proin feugiat, mauris non consequat ultrices, elit sem dictum augue, a faucibus justo eros non magna. </p>
          <p>Sed commodo porta lorem, et suscipit eros ultricies a. Etiam ut ligula sit amet augue congue semper. Quisque interdum justo tellus, a vehicula nulla lobortis ut. Nulla nisi lectus, vehicula et feugiat ut, aliquam in massa. Nam eu suscipit turpis. </p>
          <p>Duis quis nisi eget ipsum eleifend rutrum. Maecenas at scelerisque nisl, vitae condimentum erat. Pellentesque nec tellus gravida justo faucibus ornare vitae sed magna.</p>
          <p>Etiam ut pulvinar est. Pellentesque ut lorem odio. Nullam euismod elementum augue quis laoreet. Cras a tortor hendrerit, efficitur nisl eget, imperdiet mauris. Curabitur ut consequat quam.</p>
        </div>
        <Button to="mailto:alex@climbandbloom.com">Contact us</Button>
      </Box>
    )
  }
}

export default IndexPage
