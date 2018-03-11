import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import { Header } from '../components'
import s from '../styles/index.module.scss'

import favicon16 from './favicon-16.png';
import favicon32 from './favicon-32.png';

const TemplateWrapper = ({ children }) => (
  <div className={s.body}>
    <Helmet
      title="Climb and Bloom"
      meta={[
        { name: 'description', content: 'Radically effecting support for startups and new products' },
        // { name: 'keywords', content: '' },
      ]}>
      <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
      <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
    </Helmet>

    <div className={s.section}>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
