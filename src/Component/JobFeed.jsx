import { Button, Flex, Image, Text } from "@chakra-ui/react";
import Right from "./Right";
import Left from "./Left";
export default function () {
  return (
    <>
      <Flex
        py={5}
        mt={9}
        border={"1px solid black"}
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
      <Flex
        border={"1px solid red"}
        bg="#faf9f8"
        px={"10%"}
        justify="space-between"
      >
        <Left />
        <Right />
      </Flex>
    </>
  );
}
