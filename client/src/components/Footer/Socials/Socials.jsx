import styles from "./Socials.module.css";
import {
  Facebook,
  Instagram,
  Youtube,
  Pinterest,
  Twitter,
  Spotify,
  Newsletter,
} from "../../../../public/assets/icons/";
import { Flex, Box, Image } from "@chakra-ui/react";

const Socials = () => {
  return (
    <>
      <Flex
        direction={"column"}
        color="footerIcons"
        justifyContent={"center"}
        align={{ base: "center", lg: "flex-start" }}
        marginBottom={35}
      >
        <Image
          src="/assets/WOW-logo.svg"
          height={{ base: 39, lg: 50 }}
          alt={"WOW logo"}
          marginBottom={{ base: "35px", lg: "24px" }}
        />

        <Flex direction={"row"} align={"center"} width={"fit-content"}>
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
      </Flex>
      <Flex justify={"center"} color="footerIcons">
        <p className={styles.newsText}>
          <span style={{ marginRight: 10 }}>
            <Newsletter
              width={"24px"}
              height={"24px"}
              display={"inline-block"}
              lineHeight={"1em"}
              verticalAlign={"middle"}
              fill={"none"}
            />
          </span>
          <a href="https://newsletter.lanacion.com.ar/#revista-ohlala">
            Recibí nuestro Newsletter
          </a>
        </p>
      </Flex>
    </>
  );
};

export default Socials;
