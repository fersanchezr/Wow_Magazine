import React from "react";
import { Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import styles from "./Section.module.css";
import { titleToSlug } from "../../../../hooks/titleToSlug";
import Title from '../Title/Title'

const Section = ({ data }) => {
    const notesToMap = data.Content.slice(1, data.Content.length)
    const titleRouteMain = `${titleToSlug(data.Content[0].Title)}-${data.Content[0]._id}`
    const titleRouteSecondary = notesToMap.map((ele) => `${titleToSlug(ele.Title.trim())}-${ele._id}`)

    return (
        <Flex
            justifyContent="center"
            flexDirection="column"
            width={{ base: '100%', lg: '100%', xl: '65%', xxl:'51.5%' }}
            mr={{ xl: '300px' }}
        >
            <Title data={data} />
            <GridItem as="article" gridColumn="span 6/span 6" position="relative" w="100%" h="auto" mb="1rem">
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
                                h="0px"
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
                                textAlign={{ base: 'left', lg: 'center' }}
                                borderWidth="1px"
                                pt="25px"
                                pb="20px"
                                height="auto"
                                flex="1 auto"
                                flexDirection="column"
                                alignItems={{ lg: 'center' }}
                                fontSize={{ base: '20px', lg: '25.6px' }}
                            >
                                <Text as="h2" lineHeight="26px" mb="1rem" fontFamily="var(--chakra-fonts-heading)">
                                    <span className={styles.secondaryTitle}>{data.Content[0].Title} </span>
                                    {data.Content[0].secondaryTittle}
                                </Text>
                                <hr className={styles.underTitle} />
                                <Text as="h6" fontSize="14px" color="#8a8b8e">
                                    por <strong>{data.Content[1].author.firstname}</strong>
                                </Text>
                            </Flex>
                        </Flex>
                    </a>
                </Link>
            </GridItem>
            <Grid templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(3, 1fr)' }} gap={6}>
                {notesToMap &&
                    notesToMap.map((ele, i) => {
                        return (
                            <GridItem
                                key={i}
                                as="article"
                                borderBottom="1px solid #e3e9f0"
                                _hover={{
                                    textDecoration: 'underline',
                                    textDecorationColor: `${data.Color}`,
                                }}
                            >
                                <Link href={`/${ele.route}/${titleRouteSecondary[i]}`}>
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
                                </Link>
                            </GridItem>
                        )
                    })}
            </Grid>
        </Flex>
    )
}

export default Section;
