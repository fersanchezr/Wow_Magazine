import React, { useEffect, useState } from "react";
import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
/* import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel"; */
import styles from "../../FuerzaAstral/Section/Section.module.css";
import Carousel from "react-elastic-carousel";
import { useAppContext } from '../../../context/context';

const EmotionCarousel = ({ data }) => {
  const { variableState, setVariableState } = useAppContext();
  const [active, setActive] = useState({
    Feliz: false,
    Espiritual: false,
    Triste: false,
    Enojada: false,
    Enamorada: false,
    Ansiosa: false,
    Confundida: false,
    Curiosa: false,
    Femenina: false,
  });

  const activeEmotion = (emotion) => {
    for (const prop in active) {
      if (active[prop]) active[prop] = false;
    }
    if (active[emotion.Name])
      return setActive({ ...active, [emotion.Name]: false });
    setActive({ ...active, [emotion.Name]: true });
    setVariableState(emotion.Name);
  };

  const breakpoints = [
    { width: 300, itemsToShow: 3.5, itemsToScroll: 1, pagination: false },
    { width: 700, itemsToShow: 6.4, pagination: false },
    { width: 990, itemsToShow: 6.4, pagination: false },
    { width: 1200, itemsToShow: 7.4, pagination: false },
    { width: 1300, itemsToShow: 7.4, pagination: false },
  ];
  
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      h={{ base: "110px", md: "150px" }}
      p={2}
      pt="30px"
    >
      <Carousel
        breakPoints={breakpoints}
        infiniteLoop
        showArrows={false}
        focusOnSelect={false}
        itemsToShow={6}
        initialActiveIndex={0}
      >
        {data?.map((ele, i) => {
          return (
            <Flex
              key={i}
              cursor="pointer"
              flexDirection="column"
              alignItems="center"
              w={active[ele.Name] ? "47%" : "40%"}
              transition="all .30s ease-out"
            >
              <Image
                src={active[ele.Name] ? ele.SelectedIcon.url : ele.FlatIcon.url}
                onClick={() => activeEmotion(ele)}
              />
              <Text
                color="#343434"
                textTransform="uppercase"
                fontWeight={active[ele.Name] ? "bold" : "normal"}
                fontSize={active[ele.Name] ? "15px" : "12px"}
                transition="all .30s ease-out"
                mt="7px"
              >
                {ele.Name}
              </Text>
            </Flex>
          );
        })}
      </Carousel>
    </Flex>
  );
};

export default EmotionCarousel;
