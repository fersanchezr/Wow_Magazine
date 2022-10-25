import React, { useEffect, useState } from "react";
import { Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import styles from "../../FuerzaAstral/Section/Section.module.css";
import Carousel from "react-elastic-carousel";
import { useAppContext } from "../../../context/context";
import { titleToSlug } from "../../../../hooks/titleToSlug";
const NoteCarousel = ({ data }) => {
  const { variableState, setVariableState } = useAppContext();
  const [active, setActive] = useState(false);
  const emotion = data?.filter((e) => e.Name === variableState);
  useEffect(() => {
    setActive(true);
    setTimeout(() => {
      setActive(false);
    }, 1200);
  }, [variableState]);
  return (
    <Flex
      backgroundColor="#f4d6d6"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      display={{ md: "none" }}
    >
      <Grid gap={10}>
        <Carousel
          infiniteLoop
          showArrows={false}
          itemsToShow={1.1}
          className={active ? "animate__animated animate__fadeInUp" : ""}
          itemPadding={[0, 10]}
          style={{ marginBottom: "20px" }}
        >
          {emotion[0] ? (
            emotion[0]?.notes?.map((ele, i) => {
              const titleRoute = `${titleToSlug(ele.Title.trim())}-${ele._id}`;
              return (
                <GridItem
                  as="article"
                  gridColumn="span 6/span 6"
                  position="relative"
                  w="100%"
                  h="auto"
                  boxShadow="0px 1px 25px rgba(0, 0, 0, 0.22), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)"
                  bgColor="white"
                  mt="2rem"
                  key={i}
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
                          src={ele.MainImage.url}
                        />
                      </Flex>
                      <Flex
                        justifyContent="center"
                        textAlign={{ base: "left", lg: "center" }}
                        borderWidth="1px"
                        pt="25px"
                        height="auto"
                        flex="1 auto"
                        flexDirection="column"
                        alignItems={{ lg: "center" }}
                        fontSize={{ base: "20px", lg: "25.6px" }}
                      >
                        <Text
                          as="h2"
                          lineHeight="26px"
                          h="78px"
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
        </Carousel>
      </Grid>
    </Flex>
  );
};

export default NoteCarousel;
