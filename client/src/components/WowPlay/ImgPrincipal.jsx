import React from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Link,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const data = {
  type: "video",
  nid: "46911",
  uuid: "9483e756-8dca-493b-b009-2108c4395767",
  title: "MYA: sorprenden con su versión de un clásico de Cristian Castro",
  field_description:
    "Máximo Espíndola y Agustín Bernasconi visitaron la redacción de OHLALÁ! para una entrevista en exclusiva y sorprendierona a todos con su versión de un clásico de Cristian Castro.",
  field_title_pre: "MYA:",
  field_title: "sorprenden con su versión de un clásico de Cristian Castro",
  field_category: "",
  field_category_color: "#E32B6C",
  field_categories: "",
  field_credits: "Romina Salusso",
  field_tags: [],
  field_published: "12.09.2022 00:00",
  url: "/actualidad/ohlala-play/mya-sorprenden-con-su-version-de-un-clasico-de-cristian-castro-nid12092022",
  field_img_primary:
    "https://bucket.somosohlala.com.ar/s3fs-public/styles/story_medium/public/2022-09/mya_eh.png.webp?itok=xc0T-yLP",
  field_img_secondary:
    "https://bucket.somosohlala.com.ar/s3fs-public/styles/jumbo_video/public/2022-09/mya_eh.png.webp?itok=17zM1u8v",
  timestamp: 1662951600,
};

const ImgPrincipal = () => {
  return (
    <Flex
      justifyContent="center"
      flexDirection="column"
      pt="30px"
      pb="30px"
      backgroundColor="black"
      position="relative"
    >
      <Flex position="relative" w="100%" h="100%">
        <Image
          src={data.field_img_primary}
          w="100%"
          minHeight="70vh"
          h="auto"
          objectFit="cover"
          position="relative"
        />
      </Flex>
      <Box
        w="100%"
        minHeight="100%"
        h="auto"
        objectFit="cover"
        position="absolute"
        boxShadow="-0px -188px 100px -5px rgba(0,0,0,0.35) inset"
      ></Box>
      <Flex
        position="absolute"
        bottom={{ base: "50px" }}
        left={{ base: "20px" }}
        ml="10px"
      >
        <Text
          fontFamily="var(--chakra-fonts-heading)"
          fontSize={{ base: "20px", lg: "25.6px" }}
          justifyContent="flex-start"
          color="white"
          lineHeight="34px"
          letterSpacing="0.2px"
          fontWeight={600}
          ml="5%"
          bottom="20px"
        >
          <strong>{data.field_title_pre}</strong>{" "}
          <strong>{data.field_title}</strong>
        </Text>
      </Flex>
    </Flex>
  );
};

export default ImgPrincipal;
