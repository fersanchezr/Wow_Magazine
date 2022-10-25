import { Flex, Grid, Text } from "@chakra-ui/react";
import styles from "./Bottom.module.css";
import Link from "next/link";
import CollapseCard from "./CollapseCard";

const CollapseMenu = ({ selectedCategory }) => {
  return (
    <Flex
      justifyItems={"space-between"}
      justifyContent={"space-between"}
      width={"100%"}
      maxWidth={"1200px"}
    >
      <Flex
        direction={"column"}
        pt={"10px"}
        pb={"10px"}
        textTransform={"uppercase"}
      >
        {selectedCategory["sub_categories"]?.map((sub, index) => (
          <Link key={index} href={`/${selectedCategory.route}/${sub.route}`}>
            <a className={styles.collapseText}>{sub.name}</a>
          </Link>
        ))}
      </Flex>

      <Flex direction={"column"} width={"75%"}>
        <Text
          fontWeight={600}
          color={"#E32B6C"}
          mt={"5px"}
          mb={"5px"}
          textTransform={"uppercase"}
          width={"100%"}
        >
          New In
        </Text>
        <Grid
          gridGap={"1rem"}
          gridTemplateColumns={"repeat(6,1fr)"}
          width="100%"
        >
          {selectedCategory["notes"]?.map((note, index) => (
            <CollapseCard note={note} key={index} />
          ))}
        </Grid>
      </Flex>
    </Flex>
  );
};

export default CollapseMenu;
