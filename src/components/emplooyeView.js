import React from 'react'
import { AiFillDelete } from 'react-icons/ai'

export default function EmplooyeView(props) {
  return (
    <div>
        <label  >{props.label}</label>
        <AiFillDelete color='white' />
    </div>
  )
}
