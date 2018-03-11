import React from 'react';
import Link from 'gatsby-link';
import s from './style.module.scss';

const Header = () => (
  <div className={s.header}>
    <h1>
      Climb and Bloom
      <svg className={s.leaf} viewBox="0 0 64 48" xmlns="http://www.w3.org/2000/svg">
        <g>
          <title>Layer 1</title>
          <path id="svg_1" d="M51.83 1.62C47.74 -1.95 -7.23 9.24 2.06 55.64C53.1 60.31 55.92 5.18 51.83 1.62Z" fill="#29ca38"/>
        </g>
       </svg>
    </h1>
    <h2>
      Radically effective startup support
    </h2>
  </div>
)

export default Header
