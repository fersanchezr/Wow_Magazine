import { useState, useEffect } from "react";
import { Box, Image } from "@chakra-ui/react";
import { containerHeight } from "../../../hooks/containerHeight";

const DoubleSticky = ({ banners, nextBlocks }) => {
  const [height, setHeight] = useState(0);
  const [num, setNum] = useState(0);
  useEffect(() => {
    setHeight(containerHeight(nextBlocks));
    setInterval(
      (arr) => {
        let randomAd = Math.floor(Math.random() * arr.length);
        setNum(randomAd);
      },
      20000,
      banners,
    );
  }, []);
  return (
    <Box
      display={{ base: "none", xl: "block" }}
      height={`${height === 0 ? "fit-content" : height}`}
      position={"absolute"}
      left={{
        xl: "calc((100vw - 1250px) / 2 + 1250px * 0.75)",
        xxl: "calc((100vw - 1200px) / 2 + 1250px * 0.75)",
      }}
      width={"300px"}
      // mt={"30px"}
    >
      <Image src={banners[num].url} position={"sticky"} top={"115px"} />
    </Box>
  );
};

export default DoubleSticky;
