import { Flex } from "@chakra-ui/react";
import React from "react";
import Body from "./Body/Body";
import Header from "./Header/Header";
import MarginNotes from "./MarginNotes/MarginNotes";
import LoadMore from "./LoadMore";

const Notes = ({ content, subcategoryData, subcategory }) => {
  return (
    <>
      <Flex justifyContent="space-around">
        <MarginNotes />
        <Flex as="section" flexDirection="column">
          <Header content={content} />
          <Body content={content} />
        </Flex>
        <MarginNotes />
      </Flex>
      {subcategoryData.length > 0 && (
        <LoadMore
          subcategoryData={subcategoryData}
          subcategory={subcategory}
          id={content._id}
        />
      )}
    </>
  );
};

export default Notes;
