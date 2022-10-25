import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Grid,
  Image,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import styles from "./Header.module.css";

const Header = ({ content }) => {

  const category = content.route.split("/")[0].replaceAll("-", " ");
  const subCategory = content.route.split("/")[1].replaceAll("-", " ");
  const date = content.createdAt.split("T")[0];
  return (
    <Flex flexDirection="column">
      <Grid gridColumn="span 6 / span 6">
        <Flex
          flexDirection="column"
          alignItems="center"
          width="100%"
          maxWidth="1250px"
          m="0px auto"
          pt="25px"
        >
          <Breadcrumb
            spacing="8px"
            separator={<>•</>}
            color="rgb(111, 102, 219)"
            fontSize={{ base: "11px", lg: "14px" }}
            fontWeight="400"
            lineHeight="13px"
          >
            <BreadcrumbItem>
              <Link href="/">WOW!</Link>
            </BreadcrumbItem>

            <BreadcrumbItem textTransform="uppercase">
              <Link href={`/${content.route.split("/")[0]}`}>{category}</Link>
            </BreadcrumbItem>


            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink
                href="#"
                fontWeight="bold"
                textTransform="uppercase"
              >
                {subCategory}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <Text
            as="h1"
            fontSize={{ base: "26px", lg: "48px" }}
            fontWeight="bold"
            fontFamily="var(--chakra-fonts-heading)"
            lineHeight={{ base: "36px", lg: "56px" }}
            paddingInline="1em"
            pt="20px"
            textAlign="center"
          >
            {content.Title}
          </Text>

          <Text
            as="h2"
            className={styles.h2}
            fontSize={{ base: "18px", lg: "21px" }}
          >
            {content.secondaryTittle}
          </Text>

          <hr
            style={{ width: "40px", border: "2px solid rgb(111, 102, 219)" }}
          />

          <Flex
            justifyContent="center"
            paddingInline="1em"
            pt="14px"
            fontSize="15px"
          >
            <span style={{ fontWeight: "500", marginRight: "5px" }}>por</span>
            <Link href="/">
              <p style={{ fontWeight: "700", cursor: "pointer" }}>
                {content.author.firstname}
              </p>
            </Link>
          </Flex>

          <Flex justifyContent="center" paddingInline="1em" pt="10px">
            <p>
              <strong>Collagista: </strong>
              {content.author.firstname}
            </p>
          </Flex>

          <p className={styles.date}>{date}</p>
        </Flex>
      </Grid>
      <Flex justifyContent="center" width="100%" mt="-20px">
        <Flex maxWidth="1250px">
          <Grid gridColumn="span 6 / span 6">
            <Flex
              flexDirection="column"
              marginInline="28px"
              mt="25px"
              mb="25px"
            >
              <Image
                src={content.MainImage.url}
                w="100%"
                height="100%"
                bg="white"
              />
              <p className={styles.altImg}>{content.Title}</p>
            </Flex>
          </Grid>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
