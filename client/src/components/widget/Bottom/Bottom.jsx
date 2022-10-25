import { Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import NoteCarousel from "./NoteCarousel";
import EmotionCarousel from "./EmotionCarousel";
import Notes from "./Notes";
import axios from "axios";

const Bottom = ({ data }) => {
  return (
    <Flex
      flexDirection="column"
      backgroundColor="#f4d6d6"
      pl={{ base: "0", xl: "20%" }}
      pr={{ base: "0", xl: "20%" }}
    >
      <EmotionCarousel data={data} />
      <NoteCarousel data={data} />
      <Notes data={data} />
    </Flex>
  );
};

export default Bottom;
