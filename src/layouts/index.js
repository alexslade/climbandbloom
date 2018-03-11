import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import { Header } from '../components'
import s from '../styles/index.module.scss'

const TemplateWrapper = ({ children }) => (
  <div className={s.body}>
    <Helmet
      title="Climb and Bloom"
      meta={[
        { name: 'description', content: 'Radically effecting support for startups and new products' },
        // { name: 'keywords', content: '' },
      ]}
    />
    <div className={s.section}>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
