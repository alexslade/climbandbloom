import React from 'react'
import s from './style.module.scss'

const Button = ({to, children}) => (
  <a href={to} className={`${s.button}`}>
    {children}
  </a>
)

export default Button
