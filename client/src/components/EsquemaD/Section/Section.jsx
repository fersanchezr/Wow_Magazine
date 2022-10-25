import React from "react";
import { Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import styles from "./Section.module.css";
import CardSection from "./CardSection";
import { titleToSlug } from "../../../../hooks/titleToSlug";

const Section = ({ data }) => {
  const notes = data.notes.slice(1, data.notes.length);
  const titleRouteMain = `${titleToSlug(data.notes[0].Title)}-${
    data.notes[0]._id
  }`;

  return (
    <Flex width="100%" justifyContent="center" flexDirection="column">
      {data.notes[0] && (
        <GridItem
          as="article"
          gridColumn="span 6/span 6"
          position="relative"
          w="100%"
          h="auto"
          mb="1rem"
        >
          <Link
            href={`/${data.notes[0].route}/${titleRouteMain}`}
            style={{
              backgroundColor: "transparent",
              color: "inherit",
              textDecoration: "inherit",
            }}
          >
            <Flex
              flexDirection="column"
              w="100%"
              maxW="100vw"
              cursor="pointer"
              height="100%"
              overflow="hidden"
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
                  src={data.notes[0].MainImage.url}
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
                    {data.notes[0].Title}{" "}
                  </span>
                  {data.notes[0].secondaryTittle}
                </Text>
                <hr className={styles.underTitle} />
                <Text as="h6" fontSize="14px" color="#8a8b8e">
                  por{" "}
                  <strong>{`${data.notes[0].author.firstname} ${data.notes[0].author.lastname}`}</strong>
                </Text>
              </Flex>
            </Flex>
          </Link>
        </GridItem>
      )}
      {notes.length > 0 && <CardSection data={notes} />}
    </Flex>
  );
};

export default Section;
