import { Flex, Button } from "@chakra-ui/react";

import { Newsletter } from "../../../../public/assets/icons";

const NewsletterComponent = () => {
  return (
    <Button
      _hover={{ color: "#e32b6c" }}
      width="100%"
      height={"auto"}
      background="transparent"
      margin={0}
      padding={0}
      fontSize={".889rem"}
      alignItems={"center"}
      justifyContent={"center"}
      color=" rgb(117, 117, 117)"
      position={{ lg: "relative" }}
    >
      <span
        style={{
          display: "inline-flex",

          alignSelf: "center",

          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Newsletter
          width={"36px"}
          height={"36px"}
          fill="none"
          marginInlineEnd={"0.5rem"}
        />
      </span>
      <a
        href="https://newsletter.lanacion.com.ar/#revista-ohlala"
        target="_blank"
        rel="noopener noreferrer"
      >
        Newsletter
      </a>
    </Button>
  );
};

export default NewsletterComponent;
