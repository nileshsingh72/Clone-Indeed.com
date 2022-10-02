import { Button, Flex, Grid, Image, SimpleGrid, Text } from "@chakra-ui/react";
import Right from "./Right";
import Left from "./Left";
export default function ({ data }) {
  return (
    <>
      <Flex
        py={5}
        mt={9}
        borderBottom={"1px solid black"}
        justify="center"
        alignItems={"center"}
      >
        <Text fontSize="19px" fontWeight="700">
          Job feed
        </Text>
        <Button
          ml={3}
          bg="black"
          fontWeight={"bold"}
          color="white"
          fontSize={"14px"}
        >
          New
        </Button>
      </Flex>

      <Flex bg="#faf9f8" px={"15%"} justify="space-between">
        <Left data2={data} />
        <Right />
      </Flex>
    </>
  );
}
