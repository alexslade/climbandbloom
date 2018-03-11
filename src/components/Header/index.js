import React from 'react';
import Link from 'gatsby-link';
import s from './style.module.scss';

const Header = () => (
  <div className={s.header}>
    <h1>
      Climb and Bloom
      <svg className={s.leaf} transform="scale(-1,1)" viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
        <title>leaf</title>
        <g>
          <title>Layer 1</title>
          <path id="svg_1" d="m595.223816,392.677551c-387.070389,163.258362 -545.501865,-257.993881 -522.358368,-295.871704c23.143494,-37.877827 480.03891,-87.727917 522.358368,295.871704z" fill="#29ca38"/>
        </g>
       </svg>
    </h1>
    <h2>
      Radically effective startup support
    </h2>
  </div>
)

export default Header
