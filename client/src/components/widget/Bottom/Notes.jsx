import React, { useEffect, useState } from "react";
import { Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import styles from "../../FuerzaAstral/Section/Section.module.css";
import useAppContext from "../../../context/context";
import "animate.css";
import { titleToSlug } from "../../../../hooks/titleToSlug";
const Notes = ({ data }) => {
  const { variableState, setVariableState } = useAppContext();
  const [active, setActive] = useState(false);
  const emotion = data.filter((e) => e.Name === variableState);

  /*  const titleRoute = data.Content.map(
    (ele) => `${titleToSlug(ele.Title.trim())}-${ele._id}`,
  );

 */
  useEffect(() => {
    setActive(true);
    setTimeout(() => {
      setActive(false);
    }, 1200);
  }, [variableState]);
  return (
    <Grid
      display={{ base: "none", md: "grid" }}
      templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
      gap={6}
      p={2}
      mb={5}
      className={active ? "animate__animated animate__zoomIn" : ""}
    >
      {emotion[0] ? (
        emotion[0].notes.map((ele, i) => {
          const titleRoute = `${titleToSlug(ele.Title.trim())}-${ele._id}`;
          
          return (
            <GridItem
              key={i}
              as="article"
              boxShadow="0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)"
              transition="all .25s ease-in-out"
              _hover={{ transform: "scale(1.05)" }}
            >
              <Link
                href={`/${ele.route}/${titleRoute}`}
                style={{
                  backgroundColor: "transparent",
                  color: "inherit",
                  textDecoration: "inherit",
                }}
              >
                <Flex
                  display="flex"
                  flexDirection={{ base: "row", md: "column" }}
                  alignItems="start"
                  w="100%"
                  h="100%"
                  cursor="pointer"
                  paddingInlineStart="1.5rem"
                  paddingInlineEnd="1.5rem"
                  pt="1rem"
                  pb="1rem"
                  position="relative"
                  p={{ base: "16px 24px", md: "0px" }}
                  bgColor="white"
                >
                  <Flex className={styles.flexSecondaryImage}>
                    <Image
                      className={styles.secondaryImage}
                      src={ele.MainImage.url}
                    />
                  </Flex>
                  <Flex className={styles.flexSecondaryTitle}>
                    <Text
                      fontSize="1rem"
                      lineHeight="24px"
                      mb="1rem"
                      fontFamily="var(--chakra-fonts-heading)"
                    >
                      <span className={styles.secondaryTitle}>
                        {ele.Title}{" "}
                      </span>
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
          );
        })
      ) : (
        <h1>ahre</h1>
      )}
    </Grid>
  );
};

export default Notes;
