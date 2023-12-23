import React from 'react'
import { NewAdition } from './NewAdition'
import { Rework } from './Rework'

export const Mixed = () => {
  return (
    <div className='min-h-screen'>
        <Rework />
        <NewAdition />
    </div>
  )
}
