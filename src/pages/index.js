import React from 'react'
import Link from 'gatsby-link'
import styles from './test.module.scss'

class IndexPage extends React.Component {
  render() {
    return (<div>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <div className={styles.test} > Now2 go build something great.</div>
      <Link to="/page-2/">Go to page 2</Link>
    </div>)
  }
}

export default IndexPage
