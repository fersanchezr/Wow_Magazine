import {
  Facebook,
  Instagram,
  Youtube,
  Pinterest,
  Twitter,
  Spotify,
  Newsletter,
} from "../../../../public/assets/icons";
import { Button, Flex, Box, Divider, DrawerFooter } from "@chakra-ui/react";
import styles from "./Top.module.css";

const DrawerFooterContent = () => {
  return (
    <DrawerFooter
      flexDirection={"column"}
      alignItems={"start"}
      justifyContent={"flex-end"}
      mt={"10px"}
      pb={"10px"}
      paddingInline={0}
    >
      <Button
        borderRadius={"40px"}
        fontWeight={600}
        height={"37px"}
        fontSize={"0.875rem"}
        background={"#e32b6c"}
        color={"white"}
        ml={"15px"}
        mb={"30px"}
        _hover={{ bg: "#e32b6c" }}
      >
        <a href="https://www.contacto.lanacion.com.ar/org-suscribirse-print-ohlala">
          SUSCRIBITE A LA REVISTA
        </a>
      </Button>
      <Divider width={"calc(100% - 20px)"} margin={"10px"} />
      <Flex
        direction={"row"}
        width={"100%"}
        justify={"space-evenly"}
        mt={"10px"}
        mb={"10px"}
      >
        <a
          href="https://www.facebook.com/ohlalarevista/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Box className={styles.boxSocials}>
            <Facebook
              _hover={{ color: "#e32b6c" }}
              width={"33px"}
              height={"26px"}
              display={"inline-block"}
              lineHeight={"1em"}
              flexShrink={0}
              fill={"none"}
            />
          </Box>
        </a>
        <a
          href="https://www.instagram.com/revistaohlala/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Box className={styles.boxSocials}>
            <Instagram
              _hover={{ color: "#e32b6c" }}
              width={"22px"}
              height={"20px"}
              display={"inline-block"}
              lineHeight={"1em"}
              flexShrink={0}
              fill={"none"}
            />
          </Box>
        </a>
        <a
          href="https://www.youtube.com/channel/UCWm1M6xBClBxJhhAOSqPj0g?app=desktop"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Box className={styles.boxSocials}>
            <Youtube
              _hover={{ color: "#e32b6c" }}
              width={"30px"}
              height={"22px"}
              display={"inline-block"}
              lineHeight={"1em"}
              flexShrink={0}
              fill={"none"}
            />
          </Box>
        </a>
        <a
          href="https://ar.pinterest.com/revistaohlala/_created/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Box className={styles.boxSocials}>
            <Pinterest
              _hover={{ color: "#e32b6c" }}
              width={"23px"}
              height={"20px"}
              display={"inline-block"}
              lineHeight={"1em"}
              flexShrink={0}
              fill={"none"}
            />
          </Box>
        </a>
        <a
          href="https://twitter.com/revistaohlala"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Box className={styles.boxSocials}>
            <Twitter
              _hover={{ color: "#e32b6c" }}
              width={"33px"}
              height={"24px"}
              display={"inline-block"}
              lineHeight={"1em"}
              flexShrink={0}
              fill={"none"}
            />
          </Box>
        </a>
        <a
          href="https://open.spotify.com/user/revistaohlala"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Box className={styles.boxSocials}>
            <Spotify
              _hover={{ color: "#e32b6c" }}
              width={"27px"}
              height={"22px"}
              display={"inline-block"}
              lineHeight={"1em"}
              flexShrink={0}
              fill={"none"}
            />
          </Box>
        </a>
      </Flex>
      <Divider width={"calc(100% - 20px)"} margin={"10px"} />
      <Button
        background={"transparent"}
        color={"rgb(117, 117, 117)"}
        fontSize={"0.875rem"}
      >
        <span
          style={{
            alignSelf: "center",
            marginInlineEnd: "0.5rem",
          }}
        >
          <Newsletter width={"36px"} height={"36px"} fill="none" />
        </span>
        <a href="https://newsletter.lanacion.com.ar/#revista-ohlala">
          Recibí nuestro Newsletter
        </a>
      </Button>
    </DrawerFooter>
  );
};

export default DrawerFooterContent;
