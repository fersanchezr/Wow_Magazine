import React from "react";
import styles from "../../FuerzaAstral/Section/Section.module.css";
import { Flex, GridItem, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import { titleToSlug } from "../../../../hooks/titleToSlug";
import SectionTitle from "../../../commons/SectionTitle";

const Section = ({ data }) => {
  const titleRoute = data.Content.map(
    (ele) => `${titleToSlug(ele.Title.trim())}-${ele._id}`,
  );

  return (
    <Flex
      width={{ base: "100%", lg: "100%", xl: "65%", xxl:'51.5%' }}
      justifyContent="center"
      flexDirection="column"
      mr={{xl:'300px'}}
    >
    <SectionTitle icon={data.Icon} color={data.Color} title={data.Name} />
      <GridItem as="article" position="relative" w="100%" h="auto" mb="1rem">
        <Link href={`/${data.Content[0].route}/${titleRoute[0]}`}>
          <a>
            <Flex
              flexDirection="column"
              w="100%"
              maxW="100vw"
              cursor="pointer"
              height="100%"
              overflow="hidden"
              _hover={{
                textDecoration: "underline",
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
                <Image
                  className={styles.firstImage}
                  src={data.Content[0].MainImage.url}
                />
              </Flex>
              <Flex
                paddingInlineStart="1.5rem"
                paddingInlineEnd="1.5rem"
                justifyContent="center"
                textAlign={{ base: "left", lg: "center" }}
                borderWidth="1px"
                pt="25px"
                pb="20px"
                height="auto"
                flex="1 auto"
                flexDirection="column"
                alignItems={{ lg: "center" }}
                fontSize={{ base: "20px", lg: "25.6px" }}
              >
                <Text
                  as="h2"
                  lineHeight="26px"
                  mb="1rem"
                  fontFamily="var(--chakra-fonts-heading)"
                >
                  <span className={styles.secondaryTitle}>
                    {data.Content[0].Title}{" "}
                  </span>
                  {data.Content[0].secondaryTittle}
                </Text>
                <hr className={styles.underTitle} />
                <Text as="h6" fontSize="14px" color="#8a8b8e">
                  por{" "}
                  <strong>{`${data.Content[0].author.firstname} ${data.Content[0].author.lastname}`}</strong>
                </Text>
              </Flex>
            </Flex>
          </a>
        </Link>
      </GridItem>

      <Flex
        w="100%"
        h={{ base: "auto", md: "280px", lg: "280px" }}
        border="1px solid #ECECEC"
        direction={{ base: "column", lg: "row" }}
        pb={{ lg: "0px" }}
        _hover={{
          textDecoration: "underline",
          textDecorationColor: `${data.Color}`,
        }}
      >
        <Image
          w={{ base: "100%", lg: "auto" }}
          h={{ base: "auto", lg: "100%" }}
          border="1px solid black"
          src={data.Content[1].MainImage.url}
        />
        <Link href={`/${data.Content[1].route}/${titleRoute[1]}`}>
          <a>
            <Flex
              flexDirection="column"
              p="20px"
              justifyContent="center"
              cursor="pointer"
            >
              <Text
                as="h2"
                lineHeight="26px"
                mb="1rem"
                fontFamily="var(--chakra-fonts-heading)"
                fontSize="20px"
              >
                <span className={styles.secondaryTitle}>
                  {data.Content[1].Title}{" "}
                </span>
                {data.Content[1].secondaryTittle}
              </Text>
              <hr className={styles.underTitle} />
              <Text as="h6" fontSize="14px" color="#8a8b8e">
                por{" "}
                <strong>{`${data.Content[1].author.firstname} ${data.Content[1].author.lastname}`}</strong>
              </Text>
            </Flex>
          </a>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Section;
