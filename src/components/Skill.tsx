import React from 'react'
import IconCss from './Icon/IconCss'
import IconExpress from './Icon/IconExpress'
import IconLaravel from './Icon/IconLaravel'
import IconMySql from './Icon/IconMySql'
import IconNextjs from './Icon/IconNextJS'
import IconNodeJs from './Icon/IconNodeJs'
import IconTailwind from './Icon/IconTailwind'
import IconReact from './Icon/IconReact'
import IcoonLaravel from './Icon/IcoonLaravel'

function Skill() {
  return (
    <div id='skill'>
        <div id="tittle-section">SKILL</div>
        <div id="skill-section" className='container grid-cols-4 grid-rows-4 bg-green-500'>
            <IconCss/>
            <IconExpress/>
            <IconLaravel/>
            <IconMySql/>
            <IconNextjs/>
            <IconNodeJs/>
            <IconTailwind/>
            <IconReact/>
            <IcoonLaravel/>
        </div>
    </div>
  )
}

export default Skill