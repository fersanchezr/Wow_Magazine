import React, { useEffect, useState } from "react";
import { Box, Flex, Image } from "@chakra-ui/react";

const BeltAds = ({ data }) => {
  const [num, setNum] = useState(0);
  useEffect(() => {
    setInterval(
      (arr) => {
        let randomAd = Math.floor(Math.random() * arr.length);
        setNum(randomAd);
      },
      60000,
      data
    );
  }, []);
  return (
    <Box>
      <Flex
        justifyContent="center"
        height={{ base: "auto", md: "250px" }}
        width="100%"
        alignItems='start'
        backgroundImage='https://www.somosohlala.com/images/trama.svg'
        
      >
        <Image mr={{xl:'350px'}} src={data && data[num].url} alt="" />
      </Flex>
    </Box>
  );
};

export default BeltAds;
