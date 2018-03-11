import React from 'react'
import s from './style.module.scss'

const Box = ({children}) => (
  <div className={`${s.padded} ${s.headerFont}`}>
    {children}
  </div>
)

export default Box
