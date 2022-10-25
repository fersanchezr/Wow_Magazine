import React from "react";
import { GridItem, Flex, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import { titleToSlug } from "../../../hooks/titleToSlug";
import styles from "./Section.module.css";

const Card = ({ data, index }) => {
  const titleRouteSecondary = `${titleToSlug(data.Title.trim())}-${data._id}`;

  return (
    <GridItem key={index} as="article" borderBottom="1px solid #e3e9f0">
      <Link
        href={`/${data.route}/${titleRouteSecondary}`}
        style={{
          backgroundColor: "transparent",
          color: "inherit",
          textDecoration: "inherit",
        }}
      >
        <Flex
          display="flex"
          flexDirection={{ base: "row", lg: "column" }}
          alignItems="start"
          w="100%"
          h="100%"
          cursor="pointer"
          paddingInlineStart="1.5rem"
          paddingInlineEnd="1.5rem"
          pt="1rem"
          pb="1rem"
          position="relative"
          p={{ base: "16px 24px", lg: "0px" }}
        >
          <Flex className={styles.flexSecondaryImage}>
            <Image className={styles.secondaryImage} src={data.MainImage.url} />
          </Flex>
          <Flex className={styles.flexSecondaryTitle}>
            <Text
              fontSize="1rem"
              lineHeight="24px"
              mb="1rem"
              fontFamily="var(--chakra-fonts-heading)"
            >
              <span className={styles.secondaryTitle}>{data.Title} </span>
              {data.secondaryTittle}
            </Text>
            <hr className={styles.underTitle} />
            <Text as="h6" fontSize="14px" color="#8a8b8e">
              por{" "}
              <strong>{`${data.author.firstname} ${data.author.lastname}`}</strong>
            </Text>
          </Flex>
        </Flex>
      </Link>
    </GridItem>
  );
};

export default Card;
