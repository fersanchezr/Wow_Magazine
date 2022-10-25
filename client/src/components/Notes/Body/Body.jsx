import { Flex, Grid } from '@chakra-ui/react'
import React from 'react'
import Paragraphs from './Paragraphs/Paragraphs'
import SocialMedia from './SocialMedia/SocialMedia'

const Body = ({ content }) => {
    return (
        <Flex justifyContent="center" flexDirection="column" w="100%">
            <Grid gap={0} templateColumns="1fr" w="100%" maxW="1250px">
                <div style={{ maxWidth: '100vw' }}>
                    <Flex pt="25px" pb="90px" flexDirection={{base:'column', lg:'row'}}>
                        <SocialMedia />
                        <Paragraphs content={content} />
                    </Flex>
                </div>
            </Grid>
        </Flex>
    )
}

export default Body
