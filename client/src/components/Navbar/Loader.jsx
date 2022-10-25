import React from 'react'
import { Progress } from '@chakra-ui/react'

const Loader = () => {
  return (
    <Progress value={20} size='xs' colorScheme='pink' />
  )
}

export default Loader