import React from "react";
import { GridItem, Flex, Image, Heading } from "@chakra-ui/react";
import Link from "next/link";
import { titleToSlug } from "../../../../hooks/titleToSlug";

const CollapseCard = ({ note }) => {
  const titleRoute = `/${note.route}/${titleToSlug(note.Title.trim())}-${
    note._id
  }`;
  return (
    <GridItem
      key={note._id}
      w={"40%"}
      display={"flex"}
      cursor={"pointer"}
      flexDirection={"column"}
      height={"auto"}
      gridColumn={"span 2/span 2"}
    >
      <Link href={`${titleRoute}`}>
        <Flex
          position={"relative"}
          height={{ lg: "150px", xl: "180px" }}
          width={{ lg: "220px", xl: "270px" }}
          overflow={"hidden"}
          justify={"center"}
          backgroundSize={"cover"}
          backgroundPosition={"center center"}
        >
          <Image
            position={"absolute"}
            width={"100%"}
            height={"100%"}
            minWidth={"100%"}
            objectFit={"cover"}
            backgroundSize={"contain"}
            top={"0px"}
            display={"block"}
            src={note.MainImage.url}
          />
        </Flex>
      </Link>
      <Link href={`${titleRoute}`}>
        <Heading
          fontSize={"0.825rem"}
          lineHeight={1.33}
          pt={"20px"}
          pb={"20px"}
          width={{ lg: "220px", xl: "270px" }}
          fontWeight={200}
        >
          <span style={{ fontWeight: 600 }}>{note.Title}</span>{" "}
          {note.secondaryTittle}
        </Heading>
      </Link>
    </GridItem>
  );
};

export default CollapseCard;
