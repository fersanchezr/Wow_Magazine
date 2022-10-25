import { Flex, Image } from '@chakra-ui/react'
import React from 'react'
import { Button } from '@chakra-ui/react'
import { useState } from 'react'
import { useEffect } from 'react'

const BannerAdhesion = ({ data }) => {
  const [number, setNumber] = useState(0)
  const [show, setShow] = useState(true)

  const handleAd = () => {
    setShow(false)
  }
  useEffect(() => {
    setInterval(() => {
      setNumber(Math.floor(Math.random() * (3 - 0)))
    }, 60000)
  }, [])

  return (
    show && data &&
    <Flex
      display="inital"
      position="fixed"
      justifyContent="center"
      left="0px"
      right="0px"
      bottom="0px"
      zIndex="999"
        >
            <Flex justifyContent="center" width={{ base: '100%' }}>
                <Flex position="relative" justifyContent="center">
            <Button
              onClick={handleAd}
                        display="inline-flex"
                        position="absolute"
                        color="white"
                        bg="#ed2d6e"
                        top="-13px"
                        right='-10px'
                        w='10px'
                        zIndex="999"
                        borderRadius="100%"
                        verticalAlign="middle"
                    >
                        X
                    </Button>
                    <Flex alignItems="center" justifyContent="center" height="100%" width="100%" bg="white">
                        <Image src={data[0]?.adhesion[number]?.url} />
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default BannerAdhesion
