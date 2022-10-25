import { Flex, Grid, Text } from '@chakra-ui/react'
import React from 'react'
import styles from './Paragraphs.module.css'

const Paragraphs = ({ content }) => {
    return (
        <Flex>
            <Flex flexDirection="column">
                <Grid column="span 6/span 6" h="auto">
                    <Flex
                        flexDirection="column"
                        marginInlineStart="28px"
                        marginInlineEnd="28px"
                        marginBottom="1rem"
                        fontSize="1rem"
                        lineHeight="26px"
                        fontWeight="500"
                        color="#343434"
                        fontFamily="var(--chakra-fonts-body)"
                    >
                        <Text as="p" mb="30px" className={styles.bigCharacter}>
                            {content.Body}
                        </Text>
                        {/* <Text as="p" mb="30px">
                            {data.p2}
                        </Text>
                        <Text as="p" fontWeight="bold">
                            {data.p3List}
                        </Text> */}
                    </Flex>
                </Grid>

                {/* <Grid column="span 6/span 6" pl="17px">
                    <Flex
                        flexDirection="column"
                        marginInlineStart="28px"
                        marginInlineEnd="28px"
                        marginBottom="1rem"
                        fontSize="1rem"
                        lineHeight="26px"
                        fontWeight="500"
                        color="#343434"
                        fontFamily="var(--chakra-fonts-body)"
                    >
                        <Text as="ol">
                            <Text as="li" mb="30px" listStyleType="disc">
                                {data.p4Item1}
                            </Text>
                            <Text as="li" mb="30px" listStyleType="disc">
                                {data.p5Item2}
                            </Text>
                            <Text as="li" mb="30px" listStyleType="disc">
                                {data.p6Item3}
                            </Text>
                            <Text as="li" mb="30px" listStyleType="disc">
                                {data.p7Item4}
                            </Text>
                        </Text>
                    </Flex>
                </Grid> */}

                {/* <Grid column="span 6/span 6">
                    <Flex
                        flexDirection="column"
                        marginInlineStart="28px"
                        marginInlineEnd="28px"
                        marginBottom="1rem"
                        fontSize="1rem"
                        lineHeight="26px"
                        fontWeight="500"
                        color="#343434"
                        fontFamily="var(--chakra-fonts-body)"
                    >
                        <Text as="p" mb="30px">
                            {data.p8}
                        </Text>
                        <Text as="p" mb="30px">
                            {data.p9}
                        </Text>
                        <Text as="p" mb="30px">
                            {data.p10}
                        </Text>
                        <Text as="p" mb="30px">
                            {data.p11}
                        </Text>
                        <Text as="p" mb="30px">
                            {data.p12}
                        </Text>
                    </Flex>
                </Grid> */}
            </Flex>
            <Flex display={{ base: 'none', xl: 'block' }} alignItems="flex-start" width="130%" height="100%"></Flex>
        </Flex>
    )
}

export default Paragraphs
