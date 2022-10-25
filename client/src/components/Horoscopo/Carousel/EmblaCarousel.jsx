import React, { useState, useEffect, useCallback } from "react";
import { PrevButton, NextButton } from "./EmblaCarouselButtons";
import useEmblaCarousel from "embla-carousel-react";
import { Box, Link, Flex, Text } from "@chakra-ui/react";
import signos from "../signos.json";

const EmblaCarousel = () => {
  //embla configuration
  const [viewportRef, embla] = useEmblaCarousel({
    dragFree: true,
    containScroll: "trimSnaps",
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  return (
    <Box className="embla" display={{ base: "block", lg: "none" }}>
      <div className="embla__viewport" ref={viewportRef}>
        <div className="embla__container">
          {signos.map((item, index) => (
            <Flex
              key={index}
              padding={"5px"}
              direction={"column"}
              align={"center"}
              borderRadius={"6px"}
              backgroundColor={"white"}
              filter={"drop-shadow(rgba(192, 188, 210, 0.28) 1px 3px 3px)"}
            >
              <Link style={{ textDecoration: "none" }}>
                <Box
                  backgroundImage={`url(${item.image})`}
                  backgroundSize={"cover"}
                  height={"155px"}
                  width={"116px"}
                  backgroundPosition={"center"}
                  backgroundRepeat={"no-repeat"}
                ></Box>
                <Box textAlign={"center"}>
                  <Text
                    textTransform={"uppercase"}
                    color={"#6f66db"}
                    fontWeight={700}
                    fontSize={"0.875rem"}
                  >
                    {item.name}
                  </Text>
                  <Text color={"#757575"} mb={"10px"} fontSize={"0.667rem"}>
                    {item.period}
                  </Text>
                </Box>
              </Link>
            </Flex>
          ))}
        </div>
      </div>
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
    </Box>
  );
};

export default EmblaCarousel;
