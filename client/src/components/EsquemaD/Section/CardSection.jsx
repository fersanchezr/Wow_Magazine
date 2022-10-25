import React from "react";
import {
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
  Button,
  IconButton,
  Box,
} from "@chakra-ui/react";
import Link from "next/link";
import styles from "./Section.module.css";
import { useState } from "react";
import { More } from "../../../../public/assets/icons/";
import { titleToSlug } from "../../../../hooks/titleToSlug";

const CardSection = ({ data }) => {
  const [postNum, setPostNum] = useState(3); // Default number of posts dislplayed
  function handleClick() {
    setPostNum((prevPostNum) => prevPostNum + 3); // 3 is the number of posts you want to load per click
  }
  const titleRouteSecondary = data.map(
    //generating routes for the cards
    (ele) => `${titleToSlug(ele.Title.trim())}-${ele._id}`,
  );
  return (
    <>
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(3, 1fr)" }}
        gap={6}
      >
        {data &&
          data.slice(0, postNum).map((ele, i) => {
            return (
              <GridItem key={i} as="article" borderBottom="1px solid #e3e9f0">
                <Link
                  href={`/${ele.route}/${titleRouteSecondary[i]}`}
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
                        por{" "}
                        <strong>{`${ele.author.firstname} ${ele.author.lastname}`}</strong>
                      </Text>
                    </Flex>
                  </Flex>
                </Link>
              </GridItem>
            );
          })}
      </Grid>
      {postNum < data.length && (
        <Flex justify={"center"} width={"100%"} mb={"1rem"} mt={"1rem"}>
          <Button
            fontWeight={600}
            fontSize={"1rem"}
            color={"#718096"}
            background={"transparent"}
            mt={"20px"}
            _hover={{ background: "transparent", color: "#e32b6c" }}
            onClick={handleClick}
          >
            <Box as="p">Cargar más</Box>
            <Box marginInlineStart={"0.5rem"} background={"none"}>
              <More w="34px" h="35px" fill={"none"} />
            </Box>
          </Button>
        </Flex>
      )}
    </>
  );
};

export default CardSection;
