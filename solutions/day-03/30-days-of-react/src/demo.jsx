//exercise level 2 q1
import React from 'react'
import html_logo  from './images/html_logo.png'
import css_logo  from './images/css_logo.png'
import react_logo  from './images/react_logo.png'

function Demo() {
  return (
    <div className="main-wrapper" style={{overflow: 'hidden'}}>
        <h2 style={{ alignItems: 'center', display: 'flex', justifyContent: 'center'}}>Front End Technologies</h2>
        <div className="image-wrapper" style={{ width: '300px', height: '300px', display: 'flex', flexDirection: 'row', margin: ' 5px 20px 0 0', justifyContent: 'space-between'  }}>
            <img src={html_logo} alt=""  />
            <img src={css_logo} alt="" />
            <img src={react_logo} alt="" />
        </div>
    </div>
  )
}

export default Demo