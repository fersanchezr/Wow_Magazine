import { Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import styles from "./Section.module.css";
import { titleToSlug } from "../../../../hooks/titleToSlug";
import Title from '../../FuerzaAstral/Title/Title'

const Section = ({ data }) => {
    const notesToMap = data.Content?.slice(1, data.Content.length)
    const titleRouteMain = `${titleToSlug(data.Content[0].Title)}-${data.Content[0]._id}`
    const titleRouteSecondary = notesToMap.map((ele) => `${titleToSlug(ele.Title.trim())}-${ele._id}`)
    return (
        <Flex flexDir="column" width={{ base: '100%', lg: '100%', xl: '65%', xxl:'51.5%' }} mr={{ xl: '300px' }}>
            <Title data={data} />
            <Flex
                justifyContent="center"
                flexDirection={{ base: 'column', lg: 'row' }}
            >
                <GridItem
                    as="article"
                    gridColumn="span 6/span 6"
                    position={{ base: 'relative', lg: 'sticky' }}
                    top={{ lg: '109px' }}
                    w="100%"
                    h="fit-content"
                    mr={6}
                >
                    <Link href={`/${data.Content[0].route}/${titleRouteMain}`}>
                        <a>
                            <Flex
                                flexDirection="column"
                                w="100%"
                                maxW="100vw"
                                cursor="pointer"
                                height="100%"
                                overflow="hidden"
                                _hover={{
                                    textDecoration: 'underline',
                                    textDecorationColor: `${data.Color}`,
                                }}
                            >
                                <Flex
                                    position="relative"
                                    w="100%"
                                    h={{ base: '0%', lg: '80%' }}
                                    pt="calc(520% / 8.20)"
                                    maxH="520px"
                                    overflow="hidden"
                                    borderWidth="1px"
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    <Image className={styles.firstImage} src={data.Content[0].MainImage.url} />
                                </Flex>
                                <Flex
                                    paddingInlineStart="1.5rem"
                                    paddingInlineEnd="1.5rem"
                                    justifyContent="center"
                                    textAlign="left"
                                    borderWidth="1px"
                                    pt="25px"
                                    pb="20px"
                                    height="20%"
                                    flex="1 auto"
                                    flexDirection="column"
                                    alignItems={{ lg: 'center' }}
                                    fontSize={{ base: '20px', lg: '25.6px' }}
                                >
                                    <Text
                                        as="h2"
                                        lineHeight="26px"
                                        mb="1rem"
                                        fontFamily="var(--chakra-fonts-heading)"
                                        fontSize="20px"
                                    >
                                        <span className={styles.secondaryTitle}>{data.Content[0].Title} </span>
                                        {data.Content[0].secondaryTittle}
                                    </Text>
                                    <hr className={styles.underTitle} />
                                    <Text as="h6" fontSize="14px" color="#8a8b8e">
                                        por <strong>{data.Content[0].author.firstname}</strong>
                                    </Text>
                                </Flex>
                            </Flex>
                        </a>
                    </Link>
                </GridItem>
                <Grid templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }} gap={6} pb="60px">
                    {notesToMap &&
                        notesToMap?.map((ele, i) => {
                            return (
                                <GridItem key={i} as="article" borderBottom="1px solid #e3e9f0">
                                    <Link href={`/${ele.route}/${titleRouteSecondary[i]}`}>
                                        <a>
                                            <Flex
                                                display="flex"
                                                flexDirection={{ base: 'row', lg: 'column' }}
                                                alignItems="start"
                                                w="100%"
                                                h="100%"
                                                cursor="pointer"
                                                paddingInlineStart="1.5rem"
                                                paddingInlineEnd="1.5rem"
                                                pt="1rem"
                                                pb="1rem"
                                                position="relative"
                                                p={{ base: '16px 24px', lg: '0px' }}
                                                _hover={{
                                                    textDecoration: 'underline',
                                                    textDecorationColor: `${data.Color}`,
                                                }}
                                            >
                                                <Flex className={styles.flexSecondaryImage}>
                                                    <Image className={styles.secondaryImage} src={ele.MainImage.url} />
                                                </Flex>
                                                <Flex className={styles.flexSecondaryTitle}>
                                                    <Text
                                                        fontSize="1rem"
                                                        lineHeight="24px"
                                                        mb="1rem"
                                                        fontFamily="var(--chakra-fonts-heading)"
                                                    >
                                                        <span className={styles.secondaryTitle}>{ele.Title} </span>
                                                        {ele.secondaryTittle}
                                                    </Text>
                                                    <hr className={styles.underTitle} />
                                                    <Text as="h6" fontSize="14px" color="#8a8b8e">
                                                        por <strong>{ele.author.firstname}</strong>
                                                    </Text>
                                                </Flex>
                                            </Flex>
                                        </a>
                                    </Link>
                                </GridItem>
                            )
                        })}
                </Grid>
            </Flex>
        </Flex>
    )
}

export default Section;
